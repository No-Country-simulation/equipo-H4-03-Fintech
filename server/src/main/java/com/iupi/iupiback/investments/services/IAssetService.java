package com.iupi.iupiback.investments.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.investments.dto.request.AssetRequest;
import com.iupi.iupiback.investments.models.Asset;
import org.springframework.data.domain.Page;

public interface IAssetService extends ICRUService<Asset,String> {
    Page<Asset> getAssetsByPortfolio(String portfolioId, int page, int size, String sortField, String sortOrder);

    Asset saveTransactional(AssetRequest asset);

}
