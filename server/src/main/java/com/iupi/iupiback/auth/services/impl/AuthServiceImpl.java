package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.config.mapper.UserMapper;
import com.iupi.iupiback.auth.config.security.filter.JwtUtils;
import com.iupi.iupiback.auth.dto.request.LoginRequestDTO;
import com.iupi.iupiback.auth.dto.request.RegisterRequestDTO;
import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.auth.services.IAuthService;
import com.iupi.iupiback.auth.services.IEmailService;
import com.iupi.iupiback.auth.services.IPasswordValidationService;
import com.iupi.iupiback.auth.services.IUserService;
import com.iupi.iupiback.auth.utils.CookieUtils;
import com.iupi.iupiback.common.exception.BadRequestException;

import com.iupi.iupiback.common.exception.NotFoundException;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepo userRepository;
    private final JwtUtils jwtUtils;
    private final UserMapper mapper;
    private final IRoleRepo roleRepo;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final IEmailService emailService;
    private final IPasswordValidationService passwordValidationService;
    private final IUserService userService;

    // Almacena los códigos de verificación en memoria
    private final ConcurrentHashMap<String, String> verificationCodes = new ConcurrentHashMap<>();
    // Almacena la fecha de expiración del código (en milisegundos)
    private final ConcurrentHashMap<String, Long> codeExpirationTimes = new ConcurrentHashMap<>();

    private final ConcurrentHashMap<String, String> temporaryTokens = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, Long> tokenExpirationTimes = new ConcurrentHashMap<>();

    @Override
    @Transactional
    public UserResponseDTO login(LoginRequestDTO dto, HttpServletResponse resp) {
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            dto.getUsername(), dto.getPassword()));
        } catch (Exception e) {
            throw new BadRequestException("Invalid username or password");
        }
        User user = userRepository.findByEmail(dto.getUsername()).orElseThrow(
                () -> new NotFoundException("User not found with username: " + dto.getUsername()));
        return generateResponse(user,resp);
    }


    @Transactional
    public UserResponseDTO register(RegisterRequestDTO registerRequestDTO, HttpServletResponse resp) {
        Optional<User> userFound = userRepository.findByEmail(registerRequestDTO.getUsername());
        if (userFound.isPresent()) {
            throw new BadRequestException("Email already registered");
        }
        User user = new User();
        user.setEmail(registerRequestDTO.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequestDTO.getPassword()));
        user.setFirstName(registerRequestDTO.getFirstName());
        user.setLastName(registerRequestDTO.getLastName());
        Role role = roleRepo.findByRoleName("INVESTOR").orElseThrow(() -> new NotFoundException("Role not found with name INVESTOR"));
        user.setRoles(Collections.singletonList(role));
        userRepository.save(user);
        return generateResponse(user,resp);

    }
    private UserResponseDTO generateResponse(User user, HttpServletResponse response) {
        String token = jwtUtils.generateToken(user.getUsername(),user.getId());
        CookieUtils.addCookie(response,"token",token,3600);
        return mapper.toUserDTO(user);
    }

    @Override
    public UserResponseDTO getUserByUsername(String username, HttpServletResponse resp) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        return generateResponse(user,resp);
    }

    @Override
    public boolean verifyUserByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    @Override
    public String generateVerificationCode(String email) {
        String code = String.format("%05d", new Random().nextInt(1000000));
        verificationCodes.put(email, code);
        // Establecer la expiración del código a 10 minutos (en milisegundos)
        long expirationTime = System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(10);
        codeExpirationTimes.put(email, expirationTime);

        return code;
    }

    @Override
    public void sendVerificationCode(String email, String code) {
        emailService.sendVerificationEmail(email, code);
    }

    @Override
    public boolean verifyCode(String email, String code) {
        String storedCode = verificationCodes.get(email);
        Long expirationTime = codeExpirationTimes.get(email);

        if (storedCode == null || expirationTime == null) {
            return false; // No se encuentra el código
        }

        if (System.currentTimeMillis() > expirationTime) {
            verificationCodes.remove(email);
            codeExpirationTimes.remove(email);
            return false; // El código ha expirado
        }

        return storedCode.equals(code); // Verifica si el código coincide
    }

//    @Override
//    public void resetPassword(String email, String newPassword) {
//        List<String> validationErrors = passwordValidationService.getValidationErrors(newPassword);
//        if (!validationErrors.isEmpty()) {
//            throw new IllegalArgumentException("La contraseña no cumple con los requisitos: " + String.join(", ", validationErrors));
//        }
//
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("El usuario con el correo " + email + " no existe."));
//
//        user.setPassword(passwordEncoder.encode(newPassword));
//        userService.updateById(user, user.getId());
//    }

    @Override
    public String generateTemporaryToken(String email) {
        String token = UUID.randomUUID().toString();
        long expirationTime = System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(15); // Token válido por 15 minutos

        temporaryTokens.put(email, token);
        tokenExpirationTimes.put(email, expirationTime);

        return token;
    }

    @Override
    public void resetPasswordWithToken(String temporaryToken, String newPassword) {
        String email = temporaryTokens.entrySet().stream()
                .filter(entry -> entry.getValue().equals(temporaryToken))
                .map(Map.Entry::getKey)
                .findFirst()
                .orElseThrow(() -> new BadRequestException("Token temporal inválido"));

        Long expirationTime = tokenExpirationTimes.get(email);

        if (expirationTime == null || System.currentTimeMillis() > expirationTime) {
            temporaryTokens.remove(email);
            tokenExpirationTimes.remove(email);
            throw new BadRequestException("El token temporal ha expirado");
        }

        List<String> validationErrors = passwordValidationService.getValidationErrors(newPassword);
        if (!validationErrors.isEmpty()) {
            throw new IllegalArgumentException("La contraseña no cumple con los requisitos: " + String.join(", ", validationErrors));
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("El usuario con el correo " + email + " no existe."));

        user.setPassword(passwordEncoder.encode(newPassword));
        userService.updateById(user, user.getId());

        // Limpiar los datos del token temporal
        temporaryTokens.remove(email);
        tokenExpirationTimes.remove(email);
    }

}
