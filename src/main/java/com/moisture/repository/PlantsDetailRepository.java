package com.moisture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.moisture.entity.PlantsDetails;

public interface PlantsDetailRepository extends JpaRepository<PlantsDetails, Long> {

	
	@Query(value="SELECT * FROM `plant_detail` GROUP BY id_arduino", nativeQuery = true)
	List<PlantsDetails> getPlantsDetail();
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE `plant_detail` SET `soil_moisture`= :soil_moisture WHERE `id_arduino`= :id_arduino", nativeQuery = true)
	void setSoilMoisture(@Param(value = "soil_moisture")long soil_moisture, @Param(value = "id_arduino")long id_arduino);
}
