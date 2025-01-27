package com.iupi.iupiback.investments.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.iupi.iupiback.investments.models.enums.Operation;
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
@Table(name = "transactions")
public class Transaction {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "transaction_id", nullable = false,length = 18)
    private String id;

    @Column(name = "transaction_date", nullable = false,length = 40)
    private LocalDate transactionDate=LocalDate.now();

    @Enumerated(EnumType.STRING)
    @Column(name = "operation", nullable = false,length = 20)
    private Operation operation;

    @Column(name = "transa")
    private Double transactionAmount;

    private String transactionNumber;

    @ManyToOne
    @JoinColumn(name = "wallet_id", nullable = false, foreignKey = @ForeignKey(name = "FK_TRANSACTIONS_WALLET"))
    private Wallet wallet;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
