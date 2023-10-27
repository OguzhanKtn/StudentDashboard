package com.works.services;

import com.works.config.Rest;
import com.works.entities.Applications;
import com.works.repositories.ApplicationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    final ApplicationsRepository applicationsRepository;

    public ResponseEntity save(Applications applications){
        try {
            applicationsRepository.save(applications);
            Rest rest = new Rest(true,applications);
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.OK);
            return responseEntity;
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            ResponseEntity responseEntity = new ResponseEntity(rest, HttpStatus.BAD_REQUEST);
            return responseEntity;
        }
    }
}
