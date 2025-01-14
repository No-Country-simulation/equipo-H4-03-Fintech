package com.iupi.iupiback.profiles.dto.response;

import com.iupi.iupiback.profiles.models.enums.FlowType;

import java.time.LocalDate;

public record FlowMoneyResponseDTO(
        String flowMoneyId,
        FlowType flowType,
        String flowMoneyDescription,
        Double amount,
        LocalDate date,
        String urlDocument,
        String userId
) {
}
