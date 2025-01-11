package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.FlowMoney;
import com.iupi.iupiback.profiles.repositories.IFlowMoneyRepo;
import com.iupi.iupiback.profiles.services.IFlowMoneyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FlowMoneyServiceImpl extends CRUDServiceImpl<FlowMoney,String> implements IFlowMoneyService {

    private final IFlowMoneyRepo repo;

    @Override
    protected IGenericRepo<FlowMoney, String> getRepo() {
        return repo;
    }
}
