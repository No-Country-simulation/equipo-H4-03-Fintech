package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.auth.services.IUserService;
import com.iupi.iupiback.common.repositories.IGenericRepo;
import com.iupi.iupiback.common.services.imp.CRUDServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl extends CRUDServiceImpl<User, String> implements IUserService {

    private final IUserRepo repo;

    @Override
    protected IGenericRepo<User, String> getRepo() {
        return repo;
    }
}
