package com.iupi.iupiback.profiles.dto.response;

import java.time.LocalDate;

public record SurveyResponseDTO(
        int id,
        String title,
        String description,
        LocalDate startDate
) {
}
