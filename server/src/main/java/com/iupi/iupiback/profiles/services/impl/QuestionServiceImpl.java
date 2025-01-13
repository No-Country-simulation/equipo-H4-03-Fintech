package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Question;
import com.iupi.iupiback.profiles.repositories.IQuestionRepo;
import com.iupi.iupiback.profiles.services.IQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl extends CRUDServiceImpl<Question,Integer> implements IQuestionService {

    private final IQuestionRepo repo;
    @Override
    protected IGenericRepo<Question, Integer> getRepo() {
        return repo;
    }
}
