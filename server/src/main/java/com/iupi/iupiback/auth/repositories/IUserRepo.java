package com.iupi.iupiback.auth.repositories;

import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.common.repositories.IGenericRepo;


import java.util.Optional;

public interface IUserRepo extends IGenericRepo<User,String> {
    Optional<User> findByEmail(String email);
}
