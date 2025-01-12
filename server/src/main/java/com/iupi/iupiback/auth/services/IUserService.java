package com.iupi.iupiback.auth.services;

import com.iupi.iupiback.auth.dto.response.MessageDTO;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.common.services.ICRUService;

public interface IUserService extends ICRUService<User,String> {
    MessageDTO changePassword(String userId, String oldPassword, String newPassword);
}
