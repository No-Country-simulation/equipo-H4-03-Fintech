package com.iupi.iupiback.profiles.dto.response;

import java.time.LocalDate;
import java.util.List;

public record SurveyResponseDTO(
        int surveyId,
        String title,
        String description,
        LocalDate startDate,
        List<QuestionResponseDTO> questions
) {
}
