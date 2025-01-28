package com.iupi.iupiback.investments.dto.response;

import com.iupi.iupiback.investments.models.enums.Operation;

import java.time.LocalDate;

public record TransactionResponse(
        String transactionId,
        LocalDate transactionDate,
        Operation operation,
        Double transactionAmount,
        String transactionNumber
) {
}
