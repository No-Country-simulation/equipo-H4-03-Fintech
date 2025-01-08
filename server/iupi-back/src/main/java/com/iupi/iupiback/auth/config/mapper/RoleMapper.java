package com.iupi.iupiback.auth.config.mapper;

import com.iupi.iupiback.auth.dto.request.RoleRequestDTO;
import com.iupi.iupiback.auth.dto.response.RoleResponseDTO;
import com.iupi.iupiback.auth.models.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    @Mapping(source = "id",target = "roleId")
    @Mapping(source = "roleName",target = "roleName")
    RoleResponseDTO ToRoleResponseDTO(Role role);

    @Mapping(source = "firstName",target = "user.firstName")
    Role toRole(RoleRequestDTO roleRequestDTO);
}
