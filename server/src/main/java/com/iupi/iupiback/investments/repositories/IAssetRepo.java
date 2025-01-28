package com.iupi.iupiback.investments.repositories;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.investments.models.Asset;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

public interface IAssetRepo extends IGenericRepo<Asset,String> {
    @Query(value = "SELECT p FROM Asset p WHERE p.portfolio.id = ?1")
    Page<Asset> findAssetsByPortfolioId(String portfolioId, Pageable pageable);
}
