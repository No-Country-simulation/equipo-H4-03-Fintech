package com.iupi.iupiback.auth.services.impl;

import com.iupi.iupiback.auth.services.IPasswordValidationService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class PasswordValidationServiceImpl implements IPasswordValidationService {

    private static final String UPPERCASE_PATTERN = ".*[A-Z].*";
    private static final String DIGIT_PATTERN = ".*[0-9].*";
    private static final String SPECIAL_CHARACTER_PATTERN = ".*[!@#\\$%^&*].*";
    private static final int MINIMUM_LENGTH = 8;

    @Override
    public boolean validatePassword(String password) {
        return getValidationErrors(password).isEmpty();
    }

    public List<String> getValidationErrors(String password) {
        List<String> errors = new ArrayList<>();

        if (password == null || password.isEmpty()) {
            errors.add("La contraseña no puede estar vacía.");
            return errors;
        }

        if (!password.matches(UPPERCASE_PATTERN)) {
            errors.add("Debe contener al menos una letra mayúscula.");
        }

        if (!password.matches(DIGIT_PATTERN)) {
            errors.add("Debe contener al menos un número.");
        }

        if (!password.matches(SPECIAL_CHARACTER_PATTERN)) {
            errors.add("Debe contener al menos un carácter especial (!@#$%^&*).");
        }

        if (password.length() < MINIMUM_LENGTH) {
            errors.add("Debe tener al menos " + MINIMUM_LENGTH + " caracteres.");
        }

        return errors;
    }

}
