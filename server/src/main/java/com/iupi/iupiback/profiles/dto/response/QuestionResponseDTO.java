package com.iupi.iupiback.profiles.dto.response;

import java.util.List;

public record QuestionResponseDTO(
        Integer questionId,
        String question,
        List<AnswerResponseDTO> answers
) {
}
