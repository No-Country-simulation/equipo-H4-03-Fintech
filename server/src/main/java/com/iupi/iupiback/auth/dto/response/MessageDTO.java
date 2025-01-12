package com.iupi.iupiback.auth.dto.response;

public record MessageDTO(
        String message,
        int statusCode
) {
}
