package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.GoalRequestDTO;
import com.iupi.iupiback.profiles.dto.response.GoalResponseDTO;
import com.iupi.iupiback.profiles.models.Goal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface GoalMapper {

    GoalResponseDTO toGoalResponseDTO(Goal goal);

    Goal toGoal(GoalRequestDTO goalRequestDTO);
}
