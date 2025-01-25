package com.iupi.iupiback.profiles.dto.request;

import com.iupi.iupiback.profiles.models.enums.QuestionType;
import lombok.Data;

@Data
public class QuestionRequestDTO {
    private String question;
    private QuestionType questionType;
    private Integer surveyId;
}
