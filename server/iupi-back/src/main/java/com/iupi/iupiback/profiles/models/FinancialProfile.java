package com.iupi.iupiback.profiles.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.profiles.models.enums.KnowledgeFinancial;
import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import com.iupi.iupiback.profiles.models.enums.SES;
import com.iupi.iupiback.profiles.models.enums.TypeInvestment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "financial_profiles")
public class FinancialProfile {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "financial_profile_id", nullable = false, length = ID_LENGTH)
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_profile", nullable = false,length = 10)
    private RiskProfile riskProfile;

    @Enumerated(EnumType.STRING)
    @Column(name = "ses", nullable = false,length = 10)
    private SES ses;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_investment", nullable = false,length = 20)
    private TypeInvestment typeInvestment;

    @Enumerated(EnumType.STRING)
    @Column(name = "knowledge_financial",length = 10)
    private KnowledgeFinancial knowledgeFinancial;

    @Column(name = "expenses",length = 18)
    private Double expenses;

    @Column(name = "savings", length = 18)
    private Double savings;

    @Column(name = "debts",length = 18)
    private Double debts;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "FK_FINANCIAL_PROFILE_USER"))
    private User user;

    @OneToMany(mappedBy = "financialProfile", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<FlowMoney> flows;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
