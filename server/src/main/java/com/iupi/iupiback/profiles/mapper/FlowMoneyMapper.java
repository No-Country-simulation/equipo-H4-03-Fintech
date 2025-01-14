package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.FlowMoneyRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FlowMoneyResponseDTO;
import com.iupi.iupiback.profiles.models.FlowMoney;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FlowMoneyMapper {

    @Mapping(source = "financialProfile.user.id",target = "userId")
    FlowMoneyResponseDTO toFlowMoneyResponseDto(FlowMoney flowMoney);

    FlowMoney toFlowMoney(FlowMoneyRequestDTO flowMoneyRequestDTO);
}
