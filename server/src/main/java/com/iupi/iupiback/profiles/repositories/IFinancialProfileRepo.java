package com.iupi.iupiback.profiles.repositories;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import org.springframework.data.jpa.repository.Query;

public interface IFinancialProfileRepo extends IGenericRepo<FinancialProfile, String> {
    @Query("SELECT p FROM FinancialProfile p WHERE p.user.id =?1")
    FinancialProfile findByUserId(String userId);
}
