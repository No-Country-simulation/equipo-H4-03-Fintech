package com.iupi.iupiback.profiles.services;

import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.common.services.ICRUService;
import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.models.Goal;
import org.springframework.data.domain.Page;

public interface IGoalService extends ICRUService<Goal,String> {
    Page<Goal> getGoalsByUser(String userId, int page, int size, String sortField, String sortOrder);
    Goal saveTransactional(GoalRequestDTO goal, String userId);
}
