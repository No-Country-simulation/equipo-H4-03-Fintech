package com.iupi.iupiback.auth.config.mapper;

import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDTO toUserDTO(User user);
}
