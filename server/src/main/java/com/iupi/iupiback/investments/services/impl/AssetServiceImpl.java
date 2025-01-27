package com.iupi.iupiback.investments.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.investments.models.Asset;
import com.iupi.iupiback.investments.repositories.IAssetRepo;
import com.iupi.iupiback.investments.services.IAssetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AssetServiceImpl extends CRUDServiceImpl<Asset,String> implements IAssetService {

    private final IAssetRepo repo;

    @Override
    protected IGenericRepo<Asset, String> getRepo() {
        return repo;
    }
}
