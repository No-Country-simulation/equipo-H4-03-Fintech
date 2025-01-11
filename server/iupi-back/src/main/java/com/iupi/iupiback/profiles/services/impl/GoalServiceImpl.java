package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.models.Goal;
import com.iupi.iupiback.profiles.repositories.IGoalRepo;
import com.iupi.iupiback.profiles.services.IGoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalServiceImpl extends CRUDServiceImpl<Goal,String> implements IGoalService {

    private final IGoalRepo repo;
    private final IUserRepo userRepo;

    @Override
    protected IGenericRepo<Goal, String> getRepo() {
        return repo;
    }

    @Override
    public Page<Goal> getGoalsByUser(String userId, int page, int size, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page, size, getSort(sortField, sortOrder));
        return repo.findGoalsByUserId(userId,pageable);
    }

    @Override
    public Goal saveTransactional(GoalRequestDTO goal, String userId) {
        Goal newGoal = new Goal();
        User user = userRepo.findById(userId).orElseThrow();
        newGoal.setGoalName(goal.getGoalName());
        newGoal.setGoalDescription(goal.getGoalDescription());
        newGoal.setGoalAmount(goal.getGoalAmount());
        newGoal.setCurrentAmount(goal.getCurrentAmount());
        newGoal.setGoalDate(goal.getGoalDate());
        newGoal.setUser(user);
        return repo.save(newGoal);
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
