package com.iupi.iupiback.auth.repositories;

import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.common.repositories.IGenericRepo;

import java.util.Optional;

public interface IRoleRepo extends IGenericRepo<Role,String> {
    Optional<Role> findByRoleName(String roleName);
}
