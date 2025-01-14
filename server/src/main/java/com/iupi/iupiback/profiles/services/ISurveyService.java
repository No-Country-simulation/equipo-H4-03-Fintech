package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.models.Survey;
import org.springframework.data.domain.Page;

public interface ISurveyService extends ICRUService<Survey,Integer> {
    Page<Survey>findSurveys(int page, int size, String sortField, String sortOrder);
}
