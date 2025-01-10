package com.iupi.iupiback.auth.config.security.filter;


import com.iupi.iupiback.auth.dto.response.ErrorResponseDTO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Configuration
public class JwtUtils {


    @Value("${jwt.secret}")
    private  String JWT_SECRET;


    @Value("${jwt.duration}")
    private  int JWT_EXPIRATION ;


    private SecretKey getKey() {
        return Keys.hmacShaKeyFor(JWT_SECRET.getBytes());
    }

    public Date expiration() {return new Date(System.currentTimeMillis() + JWT_EXPIRATION);}

    public String generateToken( String username, String userId) {
        Map<String, Object> claims = Map.of("userId",userId);
        return Jwts.builder()
                .subject(username)
                .claims(claims)
                .expiration(expiration())
                .issuedAt(new Date(System.currentTimeMillis()))
                .signWith(getKey())
                .compact();
    }

    public <T> T getClaim(String token, Function<Claims,T> claimsResolver) {
        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims getAllClaims(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(getKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        } catch (ExpiredJwtException e) {
            throw new RuntimeException("Token is expired");
        } catch (MalformedJwtException e) {
            throw new RuntimeException("Token is malformed");
        } catch (SignatureException e) {
            throw new RuntimeException("Token signature is invalid");
        } catch (Exception e) {
            throw new RuntimeException("Error while parsing JWT", e);
        }
    }

    public String getUsernameFromToken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);

        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public Date getExpiration(String token) {
        return getClaim(token, Claims::getExpiration);
    }

    public boolean isTokenExpired(String token) {

        return getExpiration(token).before(new Date());
    }

    public String createTokenConfirmation(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 15))
                .signWith(getKey())
                .compact();
    }
}
