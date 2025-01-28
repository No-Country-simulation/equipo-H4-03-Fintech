package com.iupi.iupiback.investments.dto.request;

import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import lombok.Data;

@Data
public class PortfolioRequest {
    private String portfolioName;
    private String portfolioDescription;
    private RiskProfile riskProfile;
}
