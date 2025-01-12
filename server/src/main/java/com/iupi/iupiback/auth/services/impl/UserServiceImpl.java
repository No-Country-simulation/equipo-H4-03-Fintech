package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.dto.response.MessageDTO;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.auth.services.IUserService;
import com.iupi.iupiback.common.exception.NotFoundException;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponseException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl extends CRUDServiceImpl<User, String> implements IUserService {

    private final IUserRepo repo;
    private final PasswordEncoder passwordEncoder;

    @Override
    protected IGenericRepo<User, String> getRepo() {
        return repo;
    }

    @Override
    public MessageDTO changePassword(String userId, String oldPassword, String newPassword) {
        User user = repo.findById(userId)
                .orElseThrow(() -> new NotFoundException("Usuario no encontrado"));

        if (!user.getPassword().equals(oldPassword)) {
            return new MessageDTO("La contraseña no es la correcta",400);
        }
        else if(!oldPassword.equals(newPassword)) {
            user.setPassword(passwordEncoder.encode(newPassword));
            repo.save(user);
            return new MessageDTO("La contraseña fue cambiada correctamente",200);
        }
        return new MessageDTO("La nueva contraseña debe de ser diferente a la antigua",400);
    }
}
