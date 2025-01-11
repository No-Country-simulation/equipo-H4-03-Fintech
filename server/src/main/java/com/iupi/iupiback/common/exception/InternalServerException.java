package com.iupi.iupiback.common.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class InternalServerException extends RuntimeException {
  private final Integer statusCode = 500;
  public InternalServerException() {
    super("Internal server error");
  }
}
