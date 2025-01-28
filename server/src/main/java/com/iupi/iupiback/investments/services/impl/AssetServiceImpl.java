package com.iupi.iupiback.investments.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.investments.dto.request.AssetRequest;
import com.iupi.iupiback.investments.models.Asset;
import com.iupi.iupiback.investments.models.Portfolio;
import com.iupi.iupiback.investments.repositories.IAssetRepo;
import com.iupi.iupiback.investments.repositories.IPortfolioRepo;
import com.iupi.iupiback.investments.services.IAssetService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AssetServiceImpl extends CRUDServiceImpl<Asset,String> implements IAssetService {

    private final IAssetRepo repo;
    private final IPortfolioRepo portfolioRepo;

    @Override
    protected IGenericRepo<Asset, String> getRepo() {
        return repo;
    }

    @Override
    public Page<Asset> getAssetsByPortfolio(String portfolioId, int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findAssetsByPortfolioId(portfolioId,pageable);
    }

    @Override
    public Asset saveTransactional(AssetRequest asset) {
        Portfolio portfolio = portfolioRepo.findById(asset.getPortfolioId()).orElseThrow();
        Asset assetToSave = new Asset();
        assetToSave.setAssetName(asset.getAssetName());
        assetToSave.setAssetType(asset.getAssetType());
        assetToSave.setCurrency(asset.getCurrency());
        assetToSave.setRiskProfile(asset.getRiskProfile());
        assetToSave.setUnitValue(asset.getUnitValue());
        assetToSave.setTotalValue(asset.getTotalValue());
        assetToSave.setPortfolio(portfolio);
        return repo.save(assetToSave);
    }


    private Sort getSort(String sortField, String sortOrder) {
        Sort sort = Sort.by(sortField);
        if (sortOrder.equalsIgnoreCase("desc")) {
            sort = sort.descending();
        } else {
            sort = sort.ascending();
        }
        return sort;
    }
}
