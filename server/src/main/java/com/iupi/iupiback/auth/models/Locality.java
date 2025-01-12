package com.iupi.iupiback.auth.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "localities")
public class Locality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "locality_name", nullable = false)
    private String localityName;

    @ManyToOne
    @JoinColumn(name = "province_id", nullable = false, foreignKey = @ForeignKey(name = "FK_LOCALITIES_PROVINCE"))
    private Province province;

}
