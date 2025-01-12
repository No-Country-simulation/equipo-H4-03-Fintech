package com.iupi.iupiback.auth.services;

public interface IEmailService {
    void sendVerificationEmail(String toEmail, String verificationCode);
}
