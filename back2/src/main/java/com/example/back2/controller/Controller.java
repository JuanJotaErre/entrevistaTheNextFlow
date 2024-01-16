package com.example.back2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("string")
public class Controller {

    @GetMapping("concatenar")
    public ResponseEntity<String> concatenar(@RequestParam(value="a") String a, @RequestParam(value = "b") String b ) {
        String concatenacio = a.concat(b);
        return new ResponseEntity<>(concatenacio, HttpStatus.OK);
    }

}

