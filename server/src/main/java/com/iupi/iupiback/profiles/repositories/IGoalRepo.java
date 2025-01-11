package com.iupi.iupiback.profiles.repositories;

import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.profiles.models.Goal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;


public interface IGoalRepo extends IGenericRepo<Goal,String> {
    @Query(value = "SELECT p FROM Goal p WHERE p.user.id = ?1")
    Page<Goal> findGoalsByUserId(String userId, Pageable pageable);
}
