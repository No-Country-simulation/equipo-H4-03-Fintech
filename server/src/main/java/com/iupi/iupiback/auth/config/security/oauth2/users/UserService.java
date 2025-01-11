package com.iupi.iupiback.auth.config.security.oauth2.users;

import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUserRepo userRepository;
    private final IRoleRepo roleRepo;

    @Transactional
    public User processNewUser(UserInfoOAuth userInfoOAuth) throws ChangeSetPersister.NotFoundException {
        Optional<User> userOptional = userRepository.findByEmail(userInfoOAuth.getEmail());

        User user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
        } else {
            user = new User();
            user.setEmail(userInfoOAuth.getEmail());
            user.setActive(true);
            user.setRoles(new ArrayList<>());
            Role role = roleRepo.findByRoleName("INVESTOR").orElseThrow(ChangeSetPersister.NotFoundException::new);
            user.getRoles().add(role);
            userRepository.save(user);
        }

        return user;
    }
}
