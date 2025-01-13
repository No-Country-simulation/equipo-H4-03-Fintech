package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Answer;
import com.iupi.iupiback.profiles.repositories.IAnswerRepo;
import com.iupi.iupiback.profiles.services.IAnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl extends CRUDServiceImpl<Answer,Integer> implements IAnswerService {

    private final IAnswerRepo repo;

    @Override
    protected IGenericRepo<Answer, Integer> getRepo() {
        return repo;
    }
}
