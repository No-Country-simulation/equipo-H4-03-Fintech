package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import com.iupi.iupiback.profiles.repositories.IFinancialProfileRepo;
import com.iupi.iupiback.profiles.services.IFinancialProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FinancialProfileServiceImpl extends CRUDServiceImpl<FinancialProfile,String> implements IFinancialProfileService {

    private final IFinancialProfileRepo repo;

    @Override
    protected IGenericRepo<FinancialProfile, String> getRepo() {
        return repo;
    }
}
