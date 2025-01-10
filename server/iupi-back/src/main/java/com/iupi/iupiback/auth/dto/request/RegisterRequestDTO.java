package com.iupi.iupiback.auth.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class RegisterRequestDTO {

    private String username;

    private String password;

    private List<String> rolesId;
}
