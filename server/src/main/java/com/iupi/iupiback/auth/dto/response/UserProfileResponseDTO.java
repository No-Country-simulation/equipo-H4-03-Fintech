package com.iupi.iupiback.auth.dto.response;

public record UserProfileResponseDTO(
        String userId,
        String email,
        String firstName,
        String lastName,
        String dni,
        String dateOfBirth,
        String address,
        String locationName,
        String provinceName
) {
}
