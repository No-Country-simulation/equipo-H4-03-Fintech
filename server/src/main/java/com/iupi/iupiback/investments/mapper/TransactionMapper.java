package com.iupi.iupiback.investments.mapper;

import com.iupi.iupiback.investments.dto.request.TransactionRequest;
import com.iupi.iupiback.investments.dto.response.TransactionResponse;
import com.iupi.iupiback.investments.models.Transaction;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TransactionMapper {

    TransactionResponse toTransactionResponse(Transaction transaction);

    Transaction toTransaction(TransactionRequest transactionRequest);
}
