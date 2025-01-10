package com.iupi.iupiback.auth.controllers;

import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.auth.dto.request.LoginRequestDTO;
import com.iupi.iupiback.auth.dto.request.RegisterRequestDTO;

import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.services.IAuthService;
import com.iupi.iupiback.auth.utils.CookieUtils;

import com.iupi.iupiback.common.exception.UnAuthorizedException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final IAuthService authService;

    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequestDTO, HttpServletResponse resp) {
        UserResponseDTO response = authService.login(loginRequestDTO,resp);
        return ResponseEntity.status(200).body(response);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(@Valid @RequestBody RegisterRequestDTO registerRequestDTO, HttpServletResponse resp) {
        UserResponseDTO response = authService.register(registerRequestDTO, resp);

        return ResponseEntity.status(201).body(response);
    }

    @GetMapping("/check-login")
    public ResponseEntity<?> checkLogin(@CurrentUser UserPrincipal userPrincipal, HttpServletResponse resp) {
        log.info("Current user check login{}", userPrincipal.getName());
        if (userPrincipal== null) throw new UnAuthorizedException("Forbidden");
        UserResponseDTO response = authService.getUserByUsername(userPrincipal.getUsername(),resp);
        return ResponseEntity.status(200).body(response);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse resp, HttpServletRequest request){
        CookieUtils.deleteCookie(request,resp,"token");
        return ResponseEntity.ok().build();
    }
}

