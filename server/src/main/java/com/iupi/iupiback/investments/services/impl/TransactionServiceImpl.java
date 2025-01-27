package com.iupi.iupiback.investments.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.investments.models.Transaction;
import com.iupi.iupiback.investments.repositories.ITransactionRepo;
import com.iupi.iupiback.investments.services.ITransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl extends CRUDServiceImpl<Transaction,String> implements ITransactionService {

    private final ITransactionRepo repo;

    @Override
    protected IGenericRepo<Transaction, String> getRepo() {
        return repo;
    }
}
