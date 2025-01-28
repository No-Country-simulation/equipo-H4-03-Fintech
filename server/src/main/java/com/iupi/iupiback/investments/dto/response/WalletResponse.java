package com.iupi.iupiback.investments.dto.response;

public record WalletResponse (
        String walletId,
        String walletName,
        String walletAmount,
        String currency
){
}
