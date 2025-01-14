package com.iupi.iupiback.profiles.repositories;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.profiles.models.FlowMoney;
import com.iupi.iupiback.profiles.models.Goal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

public interface IFlowMoneyRepo extends IGenericRepo<FlowMoney,String> {
    @Query(value = "SELECT f FROM FlowMoney f LEFT JOIN FinancialProfile p ON p.id = f.financialProfile.id WHERE p.user.id  = ?1")
    Page<FlowMoney> findFlowMoneyByUserId(String userId, Pageable pageable);
}
