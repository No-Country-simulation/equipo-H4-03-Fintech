package com.iupi.iupiback.auth.dto.response;

public record UserResponseDTO(
        String userId,
        String username,
        String firstName,
        String lastName) {
}
