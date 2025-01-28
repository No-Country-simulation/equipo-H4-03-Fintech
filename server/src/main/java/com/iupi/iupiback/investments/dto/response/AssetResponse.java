package com.iupi.iupiback.investments.dto.response;

import com.iupi.iupiback.profiles.models.enums.RiskProfile;

import java.time.LocalDate;

public record AssetResponse(
        String assetId,
        String assetName,
        String assetType,
        Double quantity,
        Double totalValue,
        String currency,
        LocalDate dateAcquisition,
        RiskProfile riskProfile
) {
}
