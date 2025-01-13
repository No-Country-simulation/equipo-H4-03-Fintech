package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.FinancialProfileRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FinancialProfileResponseDTO;
import com.iupi.iupiback.profiles.dto.response.ResultSurveyResponseDTO;
import com.iupi.iupiback.profiles.models.Answer;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FinancialProfileMapper {

    @Mapping(source = "answers",target = "results")
    FinancialProfileResponseDTO toFinancialProfileResponseDTO(FinancialProfile financialProfile);

    FinancialProfile toFinancialProfile(FinancialProfileRequestDTO financialProfileRequestDTO);

    // Custom mapping method for Answer to ResultSurveyResponseDTO
    default ResultSurveyResponseDTO mapAnswerToResultSurveyResponseDTO(Answer answer) {
        return new ResultSurveyResponseDTO(answer.getQuestion().getQuestion(), answer.getAnswer());
    }

    // Map the list of answers to a list of ResultSurveyResponseDTO
    default List<ResultSurveyResponseDTO> mapAnswersToResults(List<Answer> answers) {
        if (answers == null) {
            return null;
        }
        return answers.stream()
                .map(this::mapAnswerToResultSurveyResponseDTO)
                .toList();
    }
}
