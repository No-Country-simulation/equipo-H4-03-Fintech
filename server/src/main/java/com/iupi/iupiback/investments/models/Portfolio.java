package com.iupi.iupiback.investments.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iupi.iupiback.profiles.models.enums.RiskProfile;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "portfolios")
public class Portfolio {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "portfolio_id", nullable = false, length = ID_LENGTH)
    private String id;

    @Column(name = "portfolio_name",nullable = false, length = 180)
    private String portfolioName;

    @Column(name = "portfolio_description",nullable = false, length = 350)
    private String portfolioDescription;

    @Column(name = "portfolio_start_date")
    private LocalDate portfolioStartDate = LocalDate.now();

    @Column(name = "portfolio_amount", nullable = false,length = 30)
    private Double portfolioAmount = 0.0;

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_profile", nullable = false, length = 10)
    private RiskProfile riskProfile;

    @ManyToOne
    @JoinColumn(name = "wallet_id", nullable = false,foreignKey = @ForeignKey(name = "FK_PORTFOLIOS_WALLET"))
    private Wallet wallet;

    @OneToMany(mappedBy = "portfolio", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Asset> assets;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
