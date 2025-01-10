package com.iupi.iupiback.auth.services;

import org.springframework.security.core.userdetails.UserDetails;

public interface IAuthService {
    UserDetails loadUserByUsername(String email);
}
