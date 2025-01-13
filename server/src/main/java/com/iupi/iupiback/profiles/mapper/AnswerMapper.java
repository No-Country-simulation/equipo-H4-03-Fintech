package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.AnswerRequestDTO;
import com.iupi.iupiback.profiles.dto.response.AnswerResponseDTO;
import com.iupi.iupiback.profiles.models.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "id",target = "answerId")
    AnswerResponseDTO toAnswerResponseDTO(Answer answer);

    @Mapping(source = "questionId",target = "question.id")
    Answer toAnswer(AnswerRequestDTO answerRequestDTO);
}
