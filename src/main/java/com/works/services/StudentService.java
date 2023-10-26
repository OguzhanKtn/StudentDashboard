package com.works.services;

import com.works.config.Rest;
import com.works.entities.Student;
import com.works.repositories.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    final StudentRepository studentRepository;
    final TinkEncDec tinkEncDec;

    public ResponseEntity save(Student student){
        String chipherText = tinkEncDec.encrypt(student.getPassword());
        student.setPassword(chipherText);
        try {
            studentRepository.save(student);
            Rest rest = new Rest(true,student);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }

    public ResponseEntity login(Student student){
        List<Student> students = studentRepository.findAll();
        try{
            for (Student std:students) {
                String plainText = tinkEncDec.decrypt(std.getPassword());
                if(student.getEmail().equals(std.getEmail()) && student.getPassword().equals(plainText)){
                    Rest rest = new Rest(true,student);
                    ResponseEntity responseEntity = new ResponseEntity<>(rest,HttpStatus.OK);
                    return responseEntity;
                }
            }

        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
        return null;
    }

}
