package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.FlowMoneyRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FlowMoneyResponseDTO;
import com.iupi.iupiback.profiles.models.FlowMoney;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FlowMoneyMapper {

    FlowMoneyResponseDTO toResponseDTO(FlowMoney flowMoney);

    FlowMoney toFlowMoney(FlowMoneyRequestDTO flowMoneyRequestDTO);
}
