package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.models.Role;
import com.iupi.iupiback.auth.repositories.IRoleRepo;
import com.iupi.iupiback.auth.services.IRoleService;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl extends CRUDServiceImpl<Role,String> implements IRoleService {

    private final IRoleRepo repo;

    @Override
    protected IGenericRepo<Role, String> getRepo() {
        return repo;
    }
}
