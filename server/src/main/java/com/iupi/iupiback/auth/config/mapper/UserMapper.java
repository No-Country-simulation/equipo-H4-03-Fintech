package com.iupi.iupiback.auth.config.mapper;

import com.iupi.iupiback.auth.dto.request.UserRequestDTO;
import com.iupi.iupiback.auth.dto.response.UserProfileResponseDTO;
import com.iupi.iupiback.auth.dto.response.UserResponseDTO;
import com.iupi.iupiback.auth.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "id",target = "userId")
    UserResponseDTO toUserDTO(User user);

    @Mapping(source = "localityId",target = "locality.id")
    User toUser(UserRequestDTO userRequestDTO);

    @Mapping(source = "id",target = "userId")
    @Mapping(source = "locality.localityName",target = "locationName")
    @Mapping(source = "locality.province.provinceName",target = "provinceName")
    UserProfileResponseDTO toUserProfileResponseDTO(User user);
}
