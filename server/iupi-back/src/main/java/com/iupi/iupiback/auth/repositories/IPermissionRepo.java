package com.iupi.iupiback.auth.repositories;

import com.iupi.iupiback.auth.models.Permission;
import com.iupi.iupiback.common.repositories.IGenericRepo;

import java.util.Optional;

public interface IPermissionRepo extends IGenericRepo<Permission,String> {
    Optional<Permission> findByPermissionName(String permissionName);
}
