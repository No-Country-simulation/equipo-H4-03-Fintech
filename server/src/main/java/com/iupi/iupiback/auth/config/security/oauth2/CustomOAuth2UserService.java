package com.iupi.iupiback.auth.config.security.oauth2;

import com.iupi.iupiback.auth.config.security.oauth2.users.UserInfoOAuth;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserService;
import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.common.exception.NotFoundException;
import com.iupi.iupiback.common.exception.OAuth2AuthenticationProcessingException;
import io.micrometer.common.util.StringUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;


@Slf4j
@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final IUserRepo userRepository;
    private final IRoleRepo roleRepo;

    public CustomOAuth2UserService(IUserRepo userRepository, IRoleRepo roleRepo) {
        this.userRepository = userRepository;
        this.roleRepo = roleRepo;
    }

    @Transactional
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        log.info("Inicio del método loadUser...");
        try {
            OAuth2User oAuth2User = super.loadUser(userRequest);
            return processOAuth2User(userRequest, oAuth2User);
        } catch (Exception ex) {
            log.error("Error en el método loadUser", ex);
            throw new OAuth2AuthenticationProcessingException("Error al procesar el usuario de OAuth2");
        }
    }

    @Transactional
    protected OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
        log.info("Ingreso a guardar info de google");
        UserInfoOAuth userInfoOAuth = new UserInfoOAuth(oAuth2User.getAttributes());
        if (StringUtils.isEmpty(userInfoOAuth.getEmail())) {
            log.error("Email not found from OAuth2 provider");
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }
        Optional<User> userOptional = userRepository.findByEmail(userInfoOAuth.getEmail());
        User user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
        } else {
            // Asegúrate de que el rol exista
            Role role = roleRepo.findByRoleName("INVESTOR")
                    .orElseThrow(() -> new NotFoundException("Role 'INVESTOR' not found"));

            user = new User();
            user.setEmail(userInfoOAuth.getEmail());
            user.setFirstName(userInfoOAuth.getName());
            user.setLastName(userInfoOAuth.getLastName());
            user.setRoles(new ArrayList<>());
            user.getRoles().add(role);
            user.setPassword("");  // Si no usas contraseña, déjala vacía o usa un valor predeterminado.

            // Asegúrate de que se guarde correctamente
            user = userRepository.save(user);
        }

        return UserPrincipal.create(user, oAuth2User.getAttributes());
    }
}

