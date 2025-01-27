package com.iupi.iupiback.investments.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.investments.models.Wallet;
import com.iupi.iupiback.investments.repositories.IWalletRepo;
import com.iupi.iupiback.investments.services.IWalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WalletServiceImpl extends CRUDServiceImpl<Wallet,String> implements IWalletService {

    private final IWalletRepo repo;

    @Override
    protected IGenericRepo<Wallet, String> getRepo() {
        return repo;
    }
}
