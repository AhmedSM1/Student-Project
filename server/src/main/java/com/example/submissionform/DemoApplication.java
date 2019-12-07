package com.example.submissionform;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class DemoApplication{

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
    }

    //insert default data from the database
    @Bean
    ApplicationRunner init(StudentRepo repository) {
        return args -> {
            repository.findAll().forEach(System.out::println);
        };
    }


  
}
