package com.iupi.iupiback.auth.services;
import org.springframework.security.oauth2.client.userinfo.*;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.core.user.*;


public interface ICustomOAuth2UserService {
    OAuth2User loadUser(OAuth2UserRequest userRequest);
}
