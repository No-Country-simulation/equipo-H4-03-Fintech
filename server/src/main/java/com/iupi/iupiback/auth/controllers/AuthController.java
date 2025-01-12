package com.iupi.iupiback.auth.controllers;

import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.auth.dto.request.LoginRequestDTO;
import com.iupi.iupiback.auth.dto.request.RegisterRequestDTO;

import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.services.IAuthService;
import com.iupi.iupiback.auth.utils.CookieUtils;

import com.iupi.iupiback.common.exception.BadRequestException;
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


    @PostMapping("/recover-password")
    public ResponseEntity<String> recoverPassword(@RequestParam String email) {
        if (!authService.verifyUserByEmail(email)) {
            return ResponseEntity.badRequest().body("No se encontró un usuario con este correo electrónico");
        }
        String verificationCode = authService.generateVerificationCode(email);
        authService.sendVerificationCode(email, verificationCode);  // Enviar correo electrónico con el código
        return ResponseEntity.ok("Código de verificación enviado");
    }

    @PostMapping("/validate-reset-code")
    public ResponseEntity<String> validateResetCode(@RequestParam String email, @RequestParam String code) {
        if (!authService.verifyCode(email, code)) {
            return ResponseEntity.badRequest().body("Código de verificación inválido");
        }
        // Generar un token temporal para el restablecimiento de contraseña
        String temporaryToken = authService.generateTemporaryToken(email);
        return ResponseEntity.ok(temporaryToken);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPasswordWithToken(@RequestParam String temporaryToken, @RequestParam String newPassword) {
        try {
            authService.resetPasswordWithToken(temporaryToken, newPassword);
            return ResponseEntity.ok("Contraseña actualizada exitosamente");
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (BadRequestException ex) {
            return ResponseEntity.badRequest().body("El token temporal es inválido o ha expirado");
        }
    }
            // Restablecer contraseña
//    @PostMapping("/reset-password")
//    public ResponseEntity<String> resetPassword(@RequestParam String email, @RequestParam String code, @RequestParam String newPassword) {
//        if (!authService.verifyCode(email, code)) {
//            return ResponseEntity.badRequest().body("Código de verificación inválido");
//        }
//        try {
//            authService.resetPassword(email, newPassword);
//            return ResponseEntity.ok("Contraseña actualizada exitosamente");
//        } catch (IllegalArgumentException ex) {
//            return ResponseEntity.badRequest().body(ex.getMessage());
//        }
//    }

}

