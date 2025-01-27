package com.iupi.iupiback.auth.models;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iupi.iupiback.investments.models.Wallet;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import com.iupi.iupiback.profiles.models.Goal;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {
    private static final int ID_LENGTH = 18;

    @Id
    @Column(name = "user_id", nullable = false)
    private String id;

    @Column(name = "email", nullable = false, unique = true,length = 210)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name",length = 150)
    private String firstName;

    @Column(name = "last_name",length = 150)
    private String lastName;

    @Column(name = "date_birth")
    private LocalDate dateOfBirth;

    @Column(name = "dni",length = 15)
    private String dni;

    private String address;

    @ManyToOne
    @JoinColumn(name = "locality_id")
    private Locality locality;

    private Boolean active=true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id",referencedColumnName = "user_id"),inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName = "role_id"))
    private List<Role> roles;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private FinancialProfile financialProfile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<Goal>goals;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
    @JsonIgnore
    private Wallet wallet;

    @PrePersist
    public void generateId() {
        if(this.id == null) {
            this.id = NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, NanoIdUtils.DEFAULT_ALPHABET, ID_LENGTH);
        }
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<Permission> permissions = this.getRoles().stream()
                .flatMap(role -> role.getPermissions().stream())
                .toList();

        List<GrantedAuthority> authorities = this.getRoles().stream()
                .map(rol -> new SimpleGrantedAuthority(rol.getRoleName())).collect(Collectors.toList());
        permissions.forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getPermissionName())));
        return authorities;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    // Implementa otros métodos de UserDetails
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

}
