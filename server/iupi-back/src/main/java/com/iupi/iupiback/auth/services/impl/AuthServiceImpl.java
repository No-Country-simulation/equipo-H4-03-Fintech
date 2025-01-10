package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.config.mapper.UserMapper;
import com.iupi.iupiback.auth.config.security.filter.JwtUtils;
import com.iupi.iupiback.auth.dto.request.LoginRequestDTO;
import com.iupi.iupiback.auth.dto.request.RegisterRequestDTO;
import com.iupi.iupiback.auth.dto.response.AuthResponseDTO;
import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.auth.services.IAuthService;
import com.iupi.iupiback.auth.utils.CookieUtils;
import com.iupi.iupiback.common.exception.BadRequestException;
import com.iupi.iupiback.common.exception.InvalidCredentialsException;
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


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepo userRepository;
    private final JwtUtils jwtUtils;
    private final UserMapper mapper;
    private final IRoleRepo roleRepo;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;


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
        Role role = roleRepo.findByRoleName("INVESTOR").orElseThrow(() -> new NotFoundException("Role not found with name INVESTOR"));
        user.setRoles(Collections.singletonList(role));
        userRepository.save(user);
        return generateResponse(user,resp);

    }
    @Override
    public UserResponseDTO getUserByUsername(String username, HttpServletResponse resp) {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        return generateResponse(user,resp);
    }

    private UserResponseDTO generateResponse(User user, HttpServletResponse response) {
        String token = jwtUtils.generateToken(user.getUsername(),user.getId());
        CookieUtils.addCookie(response,"token",token,3600);
        return mapper.toUserDTO(user);
    }
}
