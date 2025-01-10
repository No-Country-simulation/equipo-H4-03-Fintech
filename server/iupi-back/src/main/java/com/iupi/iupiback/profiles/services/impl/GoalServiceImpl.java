package com.iupi.iupiback.profiles.services.impl;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import com.iupi.iupiback.profiles.models.Goal;
import com.iupi.iupiback.profiles.repositories.IGoalRepo;
import com.iupi.iupiback.profiles.services.IGoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalServiceImpl extends CRUDServiceImpl<Goal,String> implements IGoalService {

    private final IGoalRepo repo;

    @Override
    protected IGenericRepo<Goal, String> getRepo() {
        return repo;
    }
}
