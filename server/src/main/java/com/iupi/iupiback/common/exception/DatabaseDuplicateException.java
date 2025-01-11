package com.iupi.iupiback.common.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DatabaseDuplicateException extends RuntimeException {
    private final Integer statusCode = 409;

    public DatabaseDuplicateException(String message) {
        super(message);
    }
}
