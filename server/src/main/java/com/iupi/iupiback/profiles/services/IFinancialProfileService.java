package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.dto.request.FinancialProfileRequestDTO;
import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import com.iupi.iupiback.profiles.models.Goal;
import org.springframework.data.domain.Page;

public interface IFinancialProfileService extends ICRUService<FinancialProfile,String> {
    FinancialProfile saveTransactional(FinancialProfileRequestDTO financialProfile, String userId);
    Page<FinancialProfile>getAllFinancialProfiles(int page, int size, String sortField, String sortOrder);
    FinancialProfile getMyFinancialProfile(String userId);
}
