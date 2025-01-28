package com.iupi.iupiback.investments.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.iupi.iupiback.investments.models.enums.AssetType;
import com.iupi.iupiback.profiles.models.enums.RiskProfile;
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
@Table(name = "assets")
public class Asset {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "asset_id", nullable = false,length = 18)
    private String id;

    @Column(name = "asset_name", nullable = false, length = 90)
    private String assetName;

    @Enumerated(EnumType.STRING)
    @Column(name = "asset_type", nullable = false, length = 20)
    private AssetType assetType;

    @Column(name = "unit_value", nullable = false, length = 20)
    private Double unitValue;

    @Column(name = "quantity", nullable = false, length = 30)
    private Double quantity;

    @Column(name = "total_value", nullable = false, length = 30)
    private Double totalValue;

    @Column(name = "currency", nullable = false, length = 50)
    private String currency;

    @Column(name = "date_acquisition",nullable = false,length = 120)
    private LocalDate dateAcquisition=LocalDate.now();

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_profile", nullable = false, length = 30)
    private RiskProfile riskProfile;

    @ManyToOne
    @JoinColumn(name = "portfolio_id", nullable = false,foreignKey = @ForeignKey(name = "FK_ASSETS_PORTFOLIO"))
    private Portfolio portfolio;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
