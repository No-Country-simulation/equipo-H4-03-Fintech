package com.iupi.iupiback.auth.config.security.filter;


import com.iupi.iupiback.auth.config.security.CustomUserDetailsService;
import com.iupi.iupiback.auth.config.security.oauth2.users.UserPrincipal;
import com.iupi.iupiback.auth.models.User;
import com.iupi.iupiback.auth.repositories.IUserRepo;
import com.iupi.iupiback.auth.utils.CookieUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtUtils jwtUtils;
    private final IUserRepo userRepo;

    public JwtAuthenticationFilter(IUserRepo userRepo, JwtUtils jwtUtils, CustomUserDetailsService userDetailsService) {
        this.jwtUtils = jwtUtils;
        this.userRepo = userRepo;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        final String token = getTokenFromRequest(request);
        Optional<Cookie> cookie = CookieUtils.getCookie(request, "token");
        if(cookie.isEmpty()) {
            filterChain.doFilter(request, response);
            return ;
        }
        String token = cookie.get().getValue();

        log.info( "Token: {}", token);
        if(token == null) {
            filterChain.doFilter(request, response);
            return;
        }
        String username = jwtUtils.getUsernameFromToken(token);
        //username = jwtUtils.getUsernameFromToken(token);
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            User userEntity = userRepo.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("User with email %s not found",username)));

            UserDetails user = UserPrincipal.create(userEntity);

            if(jwtUtils.isTokenValid(token, user)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user, null,
                        user.getAuthorities());

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            } else {
                CookieUtils.deleteCookie(request, response, "token");
            }

        }
        filterChain.doFilter(request, response);
    }

    private String getTokenFromRequest(HttpServletRequest request) {
        final String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return null;
    }
}