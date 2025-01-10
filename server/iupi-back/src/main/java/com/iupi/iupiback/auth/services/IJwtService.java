package com.iupi.iupiback.auth.services;

import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;

public interface IJwtService {
    Key getSigningKey();
    String generateToken(UserDetails userDetails);
    boolean isTokenValid(String token, UserDetails userDetails);
    String extractUsername(String token);
    Claims extractClaims(String token);
    boolean isTokenExpired(String token);
}
