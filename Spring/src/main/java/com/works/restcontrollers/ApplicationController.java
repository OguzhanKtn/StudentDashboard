package com.works.restcontrollers;

import com.works.entities.Applications;
import com.works.services.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/application")
@CrossOrigin
public class ApplicationController {

    final ApplicationService applicationService;

    @PostMapping("/save")
    public ResponseEntity add(@Valid @RequestBody Applications applications){
      return   applicationService.save(applications);
    }
}
