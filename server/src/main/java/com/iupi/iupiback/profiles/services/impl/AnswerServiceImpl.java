package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Answer;
import com.iupi.iupiback.profiles.repositories.IAnswerRepo;
import com.iupi.iupiback.profiles.services.IAnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl extends CRUDServiceImpl<Answer,Integer> implements IAnswerService {

    private final IAnswerRepo repo;

    @Override
    protected IGenericRepo<Answer, Integer> getRepo() {
        return repo;
    }

    @Override
    public Page<Answer> findAnswers(int page, int size, String sortField, String sortOrder) {
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
