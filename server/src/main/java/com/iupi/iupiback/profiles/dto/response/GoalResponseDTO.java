package com.iupi.iupiback.profiles.dto.response;

import java.time.LocalDate;

public record GoalResponseDTO(
        String goalId,
        String goalName,
        String goalDescription,
        Double goalAmount,
        Double currentAmount,
        LocalDate goalDate,
        LocalDate startDate
) {
}
