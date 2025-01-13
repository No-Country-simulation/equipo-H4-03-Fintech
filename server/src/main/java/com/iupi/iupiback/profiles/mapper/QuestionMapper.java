package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.QuestionRequestDTO;
import com.iupi.iupiback.profiles.dto.response.QuestionResponseDTO;
import com.iupi.iupiback.profiles.models.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mapping(source = "id",target = "questionId")
    @Mapping(source = "answers",target = "answers")
    QuestionResponseDTO toQuestionResponseDTO(Question question);

    @Mapping(source = "surveyId",target = "survey.id")
    Question toQuestion(QuestionRequestDTO questionRequestDTO);
}
