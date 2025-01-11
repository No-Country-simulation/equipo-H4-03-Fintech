package com.iupi.iupiback.common.exception;

public class UnAuthorizedException extends RuntimeException {
    private final Integer statusCode = 401;

    public UnAuthorizedException(String message) {
        super(message);
    }
}
