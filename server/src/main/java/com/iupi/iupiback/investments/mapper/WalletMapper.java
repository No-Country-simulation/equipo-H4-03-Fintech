package com.iupi.iupiback.investments.mapper;

import com.iupi.iupiback.investments.dto.request.WalletRequest;
import com.iupi.iupiback.investments.dto.response.WalletResponse;
import com.iupi.iupiback.investments.models.Wallet;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface WalletMapper {

    WalletResponse toResponse(Wallet wallet);

    Wallet toWallet(WalletRequest walletRequest);
}
