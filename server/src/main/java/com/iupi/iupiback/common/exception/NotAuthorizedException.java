package com.iupi.iupiback.common.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class NotAuthorizedException extends RuntimeException {
    private final Integer statusCode = 403;
    public NotAuthorizedException(String message) {
        super(message);
    }
}
