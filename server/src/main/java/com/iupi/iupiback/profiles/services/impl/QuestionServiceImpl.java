package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Question;
import com.iupi.iupiback.profiles.repositories.IQuestionRepo;
import com.iupi.iupiback.profiles.services.IQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl extends CRUDServiceImpl<Question,Integer> implements IQuestionService {

    private final IQuestionRepo repo;
    @Override
    protected IGenericRepo<Question, Integer> getRepo() {
        return repo;
    }

    @Override
    public Page<Question> findQuestions(int page, int size, String sortField, String sortOrder) {
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
