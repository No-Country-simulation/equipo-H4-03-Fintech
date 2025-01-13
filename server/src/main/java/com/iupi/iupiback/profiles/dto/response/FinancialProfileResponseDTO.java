package com.iupi.iupiback.profiles.dto.response;

import com.iupi.iupiback.profiles.models.enums.KnowledgeFinancial;
import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import com.iupi.iupiback.profiles.models.enums.SES;
import com.iupi.iupiback.profiles.models.enums.TypeInvestment;

import java.util.List;

public record FinancialProfileResponseDTO(
        String financialProfileId,
        RiskProfile riskProfile,
        SES ses,
        TypeInvestment typeInvestment,
        KnowledgeFinancial knowledgeFinancial,
        Double expenses,
        Double savings,
        Double debts,
        List<ResultSurveyResponseDTO> results
)
{ }
