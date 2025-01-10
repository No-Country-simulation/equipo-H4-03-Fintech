package com.iupi.iupiback.profiles.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.iupi.iupiback.profiles.models.enums.FlowType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "flow_money")
public class FlowMoney {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "flow_money_id", nullable = false, length = ID_LENGTH )
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(name = "flow_type", nullable = false,length = 15)
    private FlowType flowType;

    @Column(name = "flow_money_description",nullable = false, length = 220)
    private String flowMoneyDescription;

    @Column(name = "amount",length = 25)
    private Double amount;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "url_document")
    private String urlDocument;

    @ManyToOne
    @JoinColumn(name = "financial_profile_id", nullable = false, foreignKey = @ForeignKey(name = "FK_FLOW_MONEY_FINANCIAL_PROFILE"))
    private FinancialProfile financialProfile;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
