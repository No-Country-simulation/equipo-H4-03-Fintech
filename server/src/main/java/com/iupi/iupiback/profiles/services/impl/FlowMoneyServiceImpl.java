package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.exception.NotFoundException;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.dto.request.FlowMoneyRequestDTO;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import com.iupi.iupiback.profiles.models.FlowMoney;
import com.iupi.iupiback.profiles.repositories.IFinancialProfileRepo;
import com.iupi.iupiback.profiles.repositories.IFlowMoneyRepo;
import com.iupi.iupiback.profiles.services.IFlowMoneyService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FlowMoneyServiceImpl extends CRUDServiceImpl<FlowMoney,String> implements IFlowMoneyService {

    private final IFlowMoneyRepo repo;
    private final IFinancialProfileRepo financialProfileRepo;

    @Override
    protected IGenericRepo<FlowMoney, String> getRepo() {
        return repo;
    }

    @Override
    public Page<FlowMoney> getFlowMoneyByUser(String userId, int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findFlowMoneyByUserId(userId,pageable);
    }

    @Override
    public Page<FlowMoney> getAllFlowMoney(int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findAll(pageable);
    }

    @Transactional
    @Override
    public FlowMoney saveTransactional(FlowMoneyRequestDTO flowMoney, String userId) {
        FinancialProfile financialProfile = financialProfileRepo.findByUserId(userId);
        if (financialProfile == null) {
            throw new NotFoundException("Financial profile not found");
        }
        FlowMoney flowMoneyEntity = new FlowMoney();
        flowMoneyEntity.setFlowType(flowMoney.getFlowType());
        flowMoneyEntity.setFlowMoneyDescription(flowMoney.getFlowMoneyDescription());
        flowMoneyEntity.setAmount(flowMoney.getAmount());
        flowMoneyEntity.setDate(flowMoney.getDate());
        flowMoneyEntity.setUrlDocument(flowMoney.getUrlDocument());
        flowMoneyEntity.setFinancialProfile(financialProfile);
        return repo.save(flowMoneyEntity);
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
