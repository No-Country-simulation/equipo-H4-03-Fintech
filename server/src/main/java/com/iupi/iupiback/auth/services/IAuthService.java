package com.iupi.iupiback.auth.services;

import com.iupi.iupiback.auth.dto.request.LoginRequestDTO;
import com.iupi.iupiback.auth.dto.request.RegisterRequestDTO;
import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import jakarta.servlet.http.HttpServletResponse;


public interface IAuthService {
    UserResponseDTO login(LoginRequestDTO dto, HttpServletResponse response);
    UserResponseDTO register(RegisterRequestDTO dto, HttpServletResponse response);
    UserResponseDTO getUserByUsername(String username,HttpServletResponse response );
    boolean verifyUserByEmail(String email);
    String generateVerificationCode(String email);
    void sendVerificationCode(String email, String code);
    boolean verifyCode(String email, String code);
    //void resetPassword(String email, String newPassword);
    String generateTemporaryToken(String email);
    void resetPasswordWithToken(String temporaryToken, String newPassword);
}
