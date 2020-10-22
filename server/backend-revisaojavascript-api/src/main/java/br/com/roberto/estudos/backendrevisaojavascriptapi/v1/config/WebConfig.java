package br.com.roberto.estudos.backendrevisaojavascriptapi.v1.config;
/*
 *  @criado em: 22/10/2020 - {16:00}
 *  @projeto  : backend-revisaojavascript-api
 *  @autor    : roberto
 */

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}
