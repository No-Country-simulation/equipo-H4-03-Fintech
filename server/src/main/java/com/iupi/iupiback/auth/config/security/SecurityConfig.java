package com.iupi.iupiback.auth.config.security;

import com.iupi.iupiback.auth.config.security.filter.JwtAuthenticationFilter;
import com.iupi.iupiback.auth.config.security.oauth2.*;
import com.iupi.iupiback.common.endpoints.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.endpoint.DefaultAuthorizationCodeTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AccessTokenResponseClient;
import org.springframework.security.oauth2.client.endpoint.OAuth2AuthorizationCodeGrantRequest;
import org.springframework.security.oauth2.client.http.OAuth2ErrorResponseErrorHandler;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.http.converter.OAuth2AccessTokenResponseHttpMessageConverter;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    Logger logger = org.slf4j.LoggerFactory.getLogger(SecurityConfig.class);

    private final static String OAUTH2_BASE_URI = "/api/auth/oauth2/authorize";
    private final static String OAUTH2_REDIRECTION_ENDPOINT = "/oauth2/callback/*";
    private final  HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;
    private final  CustomOAuth2UserService customOAuth2UserService;
    private final  ClientRegistrationRepository clientRegistrationRepository;
    private  final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final AuthenticationProvider authenticationProvider;

    public SecurityConfig(HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository, CustomOAuth2UserService customOAuth2UserService, ClientRegistrationRepository clientRegistrationRepository, OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler, OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler, JwtAuthenticationFilter jwtAuthenticationFilter, AuthenticationProvider authenticationProvider) {
        this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
        this.customOAuth2UserService = customOAuth2UserService;
        this.clientRegistrationRepository = clientRegistrationRepository;
        this.oAuth2AuthenticationSuccessHandler = oAuth2AuthenticationSuccessHandler;
        this.oAuth2AuthenticationFailureHandler = oAuth2AuthenticationFailureHandler;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.authenticationProvider = authenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable) // Updated CSRF configuration
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers(PublicEndpoints.AUTH_ENDPOINTS_PUBLIC).permitAll();
                    auth.requestMatchers(HttpMethod.GET,"/api/auth/logout").hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.PUT,"/api/users/change-password").hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.PUT,"/api/users").hasAuthority("INVESTOR");
                    // Objetivos
                    auth.requestMatchers(HttpMethod.GET,GoalEndpoints.READ_GOALS).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.PUT,GoalEndpoints.UPDATE_GOAL).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.GET,GoalEndpoints.GET_GOAL).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.POST,GoalEndpoints.WRITE_GOALS).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.DELETE,GoalEndpoints.DELETE_GOAL).hasAuthority("INVESTOR");
                    // Encuestas
                    auth.requestMatchers(HttpMethod.GET, SurveyEndpoints.GET_SURVEY).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.POST,SurveyEndpoints.UPDATE_SURVEY).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET,SurveyEndpoints.LIST_SURVEY).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.PUT,SurveyEndpoints.UPDATE_SURVEY).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.DELETE,SurveyEndpoints.DELETE_SURVEY).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.POST, SurveyEndpoints.CREATE_SURVEY).hasAuthority("ADMIN");
                    // Preguntas
                    auth.requestMatchers(HttpMethod.GET, QuestionEndpoints.LIST_QUESTIONS).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.POST,QuestionEndpoints.CREATE_QUESTIONS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.DELETE,QuestionEndpoints.DELETE_QUESTIONS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.PUT,QuestionEndpoints.UPDATE_QUESTIONS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET,QuestionEndpoints.GET_QUESTIONS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET, QuestionEndpoints.LIST_ALL_QUESTIONS).hasAuthority("ADMIN");
                    //Opciones de Respuestas
                    auth.requestMatchers(HttpMethod.POST, AnswerEndpoints.CREATE_ANSWERS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.PUT,AnswerEndpoints.UPDATE_ANSWERS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET,AnswerEndpoints.GET_ANSWERS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.DELETE,AnswerEndpoints.DELETE_ANSWERS).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET,AnswerEndpoints.LIST_ANSWERS).hasAuthority("ADMIN");
                    // TODO: Listar respuestas por pregunta(Verificar si es necesario)

                    //Flujo de Dinero
                    auth.requestMatchers(HttpMethod.GET, FlowMoneyEndpoints.LIST_FLOW_MONEY).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.POST,FlowMoneyEndpoints.CREATE_FLOW_MONEY).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.PUT,FlowMoneyEndpoints.UPDATE_FLOW_MONEY).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.DELETE,FlowMoneyEndpoints.DELETE_FLOW_MONEY).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.GET,FlowMoneyEndpoints.LIST_ALL_FLOW_MONEY).hasAuthority("ADMIN");

                    //Perfil Financiero
                    auth.requestMatchers(HttpMethod.POST,FinancialProfileEndpoints.CREATE_FINANCIAL_PROFILE).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.PUT,FinancialProfileEndpoints.UPDATE_FINANCIAL_PROFILE).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.GET, FinancialProfileEndpoints.GEY_MY_FINANCIAL_PROFILE).hasAuthority("INVESTOR");
                    auth.requestMatchers(HttpMethod.GET,FinancialProfileEndpoints.LIST_ALL_FINANCIAL_PROFILES).hasAuthority("ADMIN");
                    auth.requestMatchers(HttpMethod.GET,FinancialProfileEndpoints.GET_FINANCIAL_PROFILE).hasAuthority("ADMIN");
                    auth.anyRequest().denyAll();
                })
                 .oauth2Login(oauth2 -> {
                     // Configuración del endpoint de autorización
                     oauth2.authorizationEndpoint(authorizationEndpoint -> authorizationEndpoint
                             .baseUri(OAUTH2_BASE_URI)
                             .authorizationRequestRepository(httpCookieOAuth2AuthorizationRequestRepository)
                             .authorizationRequestResolver(
                                     new CustomAuthorizationRequestResolver(
                                             clientRegistrationRepository,
                                             OAUTH2_BASE_URI
                                     )
                             )
                     );

                     // Configuración del endpoint de redirección
                     oauth2.redirectionEndpoint(redirectionEndpoint -> redirectionEndpoint
                             .baseUri(OAUTH2_REDIRECTION_ENDPOINT)
                     );
                     // Configuración del endpoint de userInfo
                     oauth2.userInfoEndpoint(userInfo -> userInfo
                             .userService(customOAuth2UserService)
                     );
                     // Configuración del endpoint de token
                     oauth2.tokenEndpoint(token -> token
                             .accessTokenResponseClient(authorizationCodeTokenResponseClient())
                     );

                     // Manejadores de éxito y fallo
                     oauth2.successHandler(oAuth2AuthenticationSuccessHandler)
                             .failureHandler(oAuth2AuthenticationFailureHandler);
                 })
                 .exceptionHandling(exceptionHandling -> exceptionHandling
                         .accessDeniedHandler(accessDeniedHandler())
                         .authenticationEntryPoint(authenticationEntryPoint())
                 )
                 .sessionManagement(session -> session
                         .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                 )
                 .authenticationProvider(authenticationProvider)
                 .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                 .securityContext(context -> context.requireExplicitSave(true));

        return http.build();
    }
    private OAuth2AccessTokenResponseClient<OAuth2AuthorizationCodeGrantRequest> authorizationCodeTokenResponseClient() {
        OAuth2AccessTokenResponseHttpMessageConverter tokenResponseHttpMessageConverter = new OAuth2AccessTokenResponseHttpMessageConverter();
        tokenResponseHttpMessageConverter
                .setAccessTokenResponseConverter(new CustomAccessTokenResponseConverter());

        RestTemplate restTemplate = new RestTemplate(
                Arrays.asList(new FormHttpMessageConverter(), tokenResponseHttpMessageConverter));
        restTemplate.setErrorHandler(new OAuth2ErrorResponseErrorHandler());

        DefaultAuthorizationCodeTokenResponseClient tokenResponseClient = new DefaultAuthorizationCodeTokenResponseClient();
        tokenResponseClient.setRestOperations(restTemplate);

        return tokenResponseClient;
    }

    @Bean
    public AccessDeniedHandler accessDeniedHandler() {
        return (request, response, accessDeniedException) -> {
            logger.info("error: {}", accessDeniedException.getMessage());
            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.getWriter().write("403 Forbidden: Acceso denegado." + accessDeniedException.getMessage());
        };
    }

    @Bean
    public AuthenticationEntryPoint authenticationEntryPoint() {
        return new Http403ForbiddenEntryPoint(); // This will return a 403 error if not authenticated
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.setAllowedOrigins(List.of("http://localhost:5173","http://localhost:3000","https://iupi-ahorros.vercel.app"));
        configuration.setAllowedMethods(
                Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setMaxAge(3600L); // 1 hour

        // Add CSRF protection
        configuration.setExposedHeaders(List.of("X-CSRF-TOKEN"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}