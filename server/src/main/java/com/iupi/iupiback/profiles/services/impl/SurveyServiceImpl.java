package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Survey;
import com.iupi.iupiback.profiles.repositories.ISurveyRepo;
import com.iupi.iupiback.profiles.services.ISurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SurveyServiceImpl extends CRUDServiceImpl<Survey,Integer> implements ISurveyService {

    private final ISurveyRepo repo;

    @Override
    protected IGenericRepo<Survey, Integer> getRepo() {
        return repo;
    }

    @Override
    public Page<Survey> findSurveys(int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findAll(pageable);
    }

    private Sort getSort(String sortField, String sortOrder) {
        Sort sort = Sort.by(sortField);
        if (sortOrder.equalsIgnoreCase("desc")) {
            sort = sort.descending();
        } else {
            sort = sort.ascending();
        }
        return sort;
    }
}
