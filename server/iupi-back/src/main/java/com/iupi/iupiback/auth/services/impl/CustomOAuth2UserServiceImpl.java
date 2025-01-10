package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserServiceImpl implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final IUserRepo userRepository;

    private final IRoleRepo roleRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); // "google" o "apple"
        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");

        if (email == null) {
            throw new OAuth2AuthenticationException(new OAuth2Error("invalid_email"), "El email es obligatorio");
        }

        User user = userRepository.findByEmail(email).orElseGet(() -> {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFirstName(name != null ? name.split(" ")[0] : "Nombre");
            newUser.setLastName(name != null ? name.split(" ").length > 1 ? name.split(" ")[1] : "Apellido" : "Apellido");
            // Asignar rol por defecto
            Role userRole = roleRepository.findByRoleName("USER")
                    .orElseThrow(() -> new OAuth2AuthenticationException(new OAuth2Error("role_not_found"), "Rol 'USER' no encontrado"));
            newUser.setRoles(Set.of(userRole));
            return userRepository.save(newUser);
        });

        return new DefaultOAuth2User(
                user.getAuthorities(),
                oAuth2User.getAttributes(),
                "email"
        );
    }
}
