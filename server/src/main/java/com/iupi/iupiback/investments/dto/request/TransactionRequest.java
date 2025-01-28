package com.iupi.iupiback.investments.dto.request;

import com.iupi.iupiback.investments.models.enums.Operation;
import lombok.Data;

@Data
public class TransactionRequest {
    private Operation operation;
    private Double transactionAmount;
    private String transactionNumber;
}
