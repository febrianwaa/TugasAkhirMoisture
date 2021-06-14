package com.moisture.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moisture.entity.PlantsDetails;

public interface PlantsDetailRepository extends JpaRepository<PlantsDetails, Long> {

}
