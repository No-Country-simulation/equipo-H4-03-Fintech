package com.iupi.iupiback.investments.dto.response;

import com.iupi.iupiback.profiles.models.enums.RiskProfile;

import java.time.LocalDate;

public record PortfolioResponse(
        String portfolioId,
        String portfolioName,
        String portfolioDescription,
        LocalDate portfolioStartDate,
        Double portfolioAmount,
        RiskProfile riskProfile
) {
}
