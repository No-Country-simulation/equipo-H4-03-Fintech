package com.iupi.iupiback.investments.dto.request;

import com.iupi.iupiback.investments.models.enums.AssetType;
import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;


@Data
public class AssetRequest {
    private String assetName;

    private AssetType assetType;

    private Double unitValue;

    private Double quantity;

    private Double totalValue;

    private String currency;

    @Enumerated(EnumType.STRING)
    private RiskProfile riskProfile;

    private String portfolioId;
}
