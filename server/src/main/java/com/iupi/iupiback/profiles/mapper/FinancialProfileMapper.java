package com.iupi.iupiback.profiles.mapper;

import com.iupi.iupiback.profiles.dto.request.FinancialProfileRequestDTO;
import com.iupi.iupiback.profiles.dto.response.FinancialProfileResponseDTO;
import com.iupi.iupiback.profiles.models.FinancialProfile;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FinancialProfileMapper {

    FinancialProfileResponseDTO toFinancialProfileResponseDTO(FinancialProfile financialProfile);

    FinancialProfile toFinancialProfile(FinancialProfileRequestDTO financialProfileRequestDTO);
}
