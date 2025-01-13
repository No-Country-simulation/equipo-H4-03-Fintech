package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Survey;
import com.iupi.iupiback.profiles.repositories.ISurveyRepo;
import com.iupi.iupiback.profiles.services.ISurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SurveyServiceImpl extends CRUDServiceImpl<Survey,Integer> implements ISurveyService {

    private final ISurveyRepo repo;

    @Override
    protected IGenericRepo<Survey, Integer> getRepo() {
        return repo;
    }
}
