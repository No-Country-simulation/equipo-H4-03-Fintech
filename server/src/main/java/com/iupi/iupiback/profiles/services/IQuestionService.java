package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.models.Question;
import org.springframework.data.domain.Page;

public interface IQuestionService extends ICRUService<Question,Integer> {
    Page<Question> findQuestions(int page, int size, String sortField, String sortOrder);

}
