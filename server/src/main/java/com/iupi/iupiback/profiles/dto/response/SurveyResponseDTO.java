package com.iupi.iupiback.profiles.dto.response;

import java.time.LocalDate;

public record SurveyResponseDTO(
        int surveyId,
        String title,
        String description,
        LocalDate startDate
) {
}
