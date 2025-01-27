package com.iupi.iupiback.investments.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.investments.models.Portfolio;
import com.iupi.iupiback.investments.repositories.IPortfolioRepo;
import com.iupi.iupiback.investments.services.IPortfolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PortfolioServiceImpl extends CRUDServiceImpl<Portfolio,String> implements IPortfolioService {

    private final IPortfolioRepo repo;

    @Override
    protected IGenericRepo<Portfolio, String> getRepo() {
        return repo;
    }
}
