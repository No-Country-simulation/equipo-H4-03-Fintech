package com.iupi.iupiback.profiles.dto.request;

import com.iupi.iupiback.profiles.models.enums.FlowType;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FlowMoneyRequestDTO {
    private FlowType flowType;

    private String flowMoneyDescription;

    private Double amount;

    private LocalDate date;

    private String urlDocument;
}
