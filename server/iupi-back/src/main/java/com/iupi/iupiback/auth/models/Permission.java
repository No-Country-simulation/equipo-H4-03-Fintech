package com.iupi.iupiback.auth.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
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
@Table(name = "permissions")
public class Permission {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "permission_id", nullable = false,length = 18)
    private String id;

    @Column(name = "permission_name", nullable = false, length = 150)
    private String permissionName;

    @Column(name = "permission_description",nullable = false,length = 220)
    private String permissionDescription;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }
}
