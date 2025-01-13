package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.SurveyRequestDTO;
import com.iupi.iupiback.profiles.dto.response.SurveyResponseDTO;
import com.iupi.iupiback.profiles.models.Survey;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SurveyMapper {
    @Mapping(source = "id",target = "surveyId")
    @Mapping(source = "title",target = "title")
    SurveyResponseDTO toSurveyResponseDTO(Survey survey);

    Survey toSurvey(SurveyRequestDTO surveyRequestDTO);
}
