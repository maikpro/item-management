package rest.kotlin.restapi.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebSecurityConfig implements WebMvcConfigurer {
    private final Environment environment;

    public WebSecurityConfig(Environment environment) {
        this.environment = environment;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(this.environment.getProperty("frontendUrl"))
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
