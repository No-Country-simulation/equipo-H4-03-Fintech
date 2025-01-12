package com.iupi.iupiback.auth.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserRequestDTO {
    private String firstName;
    private String lastName;
    private String dni;
    private LocalDate dateOfBirth;
    private String address;
    private int localityId;
}
