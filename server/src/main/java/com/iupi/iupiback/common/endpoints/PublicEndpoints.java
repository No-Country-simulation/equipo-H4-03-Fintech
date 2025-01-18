package com.iupi.iupiback.common.endpoints;

public class PublicEndpoints {
    public static final String[] AUTH_ENDPOINTS_PUBLIC = {
            "/api/auth/login",
            "/api/auth/register",
            "/api/auth/check-login",
            "/api/auth/login/oauth",
            "/oauth2/callback/**",
            "/oauth2/callback/google",
            "/oauth2/callback/google/**",
            "/api/auth/oauth2/authorize/**",
            "/api/auth/recover-password/**",
            "/api/auth/validate-reset-code/**",
            "/api/auth/reset-password/**",
            "/swagger-ui/**",
            "/v3/api-docs/**",
            "/swagger-ui.html"
    };
}