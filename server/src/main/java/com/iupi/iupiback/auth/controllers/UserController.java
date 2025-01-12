package com.iupi.iupiback.auth.controllers;

import com.iupi.iupiback.auth.config.mapper.UserMapper;
import com.iupi.iupiback.auth.config.security.oauth2.users.CurrentUser;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.auth.dto.request.ChangePasswordDTO;
import com.iupi.iupiback.auth.dto.response.MessageDTO;
import com.iupi.iupiback.auth.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final IUserService service;
    private final UserMapper mapper;

    @PostMapping("/change-password")
    public ResponseEntity<MessageDTO> changePassword(@CurrentUser UserPrincipal currentUser, @RequestBody ChangePasswordDTO dto) {
        MessageDTO response = service.changePassword(currentUser.getId(), dto.getOldPassword(), dto.getNewPassword());
        return ResponseEntity.status(response.statusCode()).body(response);
    }
}
