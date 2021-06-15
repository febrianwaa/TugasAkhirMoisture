package com.moisture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.moisture.entity.PlantsDetails;

public interface PlantsDetailRepository extends JpaRepository<PlantsDetails, Long> {

	
	@Query(value="SELECT * FROM `plant_detail` GROUP BY id_arduino", nativeQuery = true)
	List<PlantsDetails> getPlantsDetail();
}
