package ita.bootcamp.miniproject.configuration;

import ita.bootcamp.miniproject.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SpringConfiguration {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        //filter chain is the internal processes of spring to validate the user
        httpSecurity.authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/public").permitAll() //this will allow all for endpoints
                        .requestMatchers("/customer/**").hasRole("USER")
                        .requestMatchers("/customer/**").hasRole("ADMIN"))
                    .userDetailsService(customUserDetailsService);
        return httpSecurity.build();
    }
}
