package com.iupi.iupiback.profiles.dto.request;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDate;

@Data
public class GoalRequestDTO {
    private String goalName;

    private String goalDescription;

    private Double goalAmount;

    private Double currentAmount;

    private LocalDate goalDate;
}
