package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.dto.request.FlowMoneyRequestDTO;
import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.models.FlowMoney;
import com.iupi.iupiback.profiles.models.Goal;
import org.springframework.data.domain.Page;

public interface IFlowMoneyService extends ICRUService<FlowMoney,String> {
    Page<FlowMoney> getFlowMoneyByUser(String userId, int page, int size, String sortField, String sortOrder);
    Page<FlowMoney> getAllFlowMoney( int page, int size, String sortField, String sortOrder);
    FlowMoney saveTransactional(FlowMoneyRequestDTO flowMoney, String userId);
}
