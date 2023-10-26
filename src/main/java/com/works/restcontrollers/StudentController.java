package com.works.restcontrollers;

import com.works.entities.Student;
import com.works.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
public class StudentController {

    final StudentService studentService;

    @PostMapping("/studentSave")
        public ResponseEntity add(@Valid @RequestBody Student student){
        return studentService.save(student);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Student student){
        return studentService.login(student);
    }
}
