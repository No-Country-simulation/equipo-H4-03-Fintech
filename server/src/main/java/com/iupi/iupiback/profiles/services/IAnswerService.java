package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.models.Answer;
import com.iupi.iupiback.profiles.models.Question;
import org.springframework.data.domain.Page;

public interface IAnswerService extends ICRUService<Answer,Integer> {
    Page<Answer> findAnswers(int page, int size, String sortField, String sortOrder);

}
