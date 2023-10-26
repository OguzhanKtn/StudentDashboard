package com.works.repositories;

import com.works.entities.Applications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationsRepository extends JpaRepository<Applications, Long> {
}