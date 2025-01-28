package com.iupi.iupiback.investments.mapper;

import com.iupi.iupiback.investments.dto.request.PortfolioRequest;
import com.iupi.iupiback.investments.dto.response.PortfolioResponse;
import com.iupi.iupiback.investments.models.Portfolio;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioMapper {

    PortfolioResponse toPortfolioResponse(Portfolio portfolio);

    Portfolio toPortfolio(PortfolioRequest portfolioRequest);
}
