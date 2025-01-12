package com.iupi.iupiback.auth.services;

import java.util.List;

public interface IPasswordValidationService {
    boolean validatePassword(String password);
    List<String> getValidationErrors(String password);
}
