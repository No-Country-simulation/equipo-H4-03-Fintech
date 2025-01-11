package com.iupi.iupiback.profiles.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.iupi.iupiback.auth.models.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "goals")
public class Goal {
    private static final int ID_LENGTH = 18;
    @Id
    @Column(name = "goal_id",nullable = false,length = ID_LENGTH)
    private String id;

    @Column(name = "goal_name",nullable = false,length = 150)
    private String goalName;

    @Column(name = "goal_description",nullable = false,length = 550)
    private String goalDescription;

    @Column(name = "goal_amount",nullable = false,length = 25)
    private Double goalAmount;

    @Column(name = "current_amount",nullable = false,length = 25)
    private Double currentAmount;

    @Column(name = "goal_date",nullable = false)
    private LocalDate goalDate;

    @Column(name = "start_date",nullable = false)
    private LocalDate startDate=LocalDate.now();

    @Column(name = "state",nullable = false)
    private Boolean state=true;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false,foreignKey = @ForeignKey(name = "FK_GOALS_USER"))
    private User user;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
