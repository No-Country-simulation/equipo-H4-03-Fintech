package com.iupi.iupiback.profiles.dto.request;

import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import com.iupi.iupiback.profiles.models.enums.SES;
import com.iupi.iupiback.profiles.models.enums.TypeInvestment;

import lombok.Data;

@Data
public class FinancialProfileRequestDTO {
    private RiskProfile riskProfile;
    private SES ses;
    private TypeInvestment typeInvestment;
}
