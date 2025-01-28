package com.iupi.iupiback.investments.dto.request;

import lombok.Data;

@Data
public class WalletRequest {
    private String walletName;
    private String walletAmount;
    private String currency;
}
