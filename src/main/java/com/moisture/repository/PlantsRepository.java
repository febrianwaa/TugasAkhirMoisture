package com.moisture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moisture.entity.Plants;



public interface PlantsRepository extends JpaRepository<Plants, Long>{
	
	
	
	@Query(value="select user.username, plants.name, plant_detail.soil_moisture from plants join user on plants.user_id= user.id join on plants.plants_detail_id=plant_detail.id_arduino where user.id = ?1 order by plant_detail.id desc limit 1", nativeQuery = true)
	Plants findSoilMoiture(String id);
	

//	@Query(value="SELECT plants.id, plants.image,plants.name FROM plants JOIN plant_detail ON plants.plants_detail_id=plant_detail.id_arduino JOIN user ON plants.id_user=user.id WHERE id_user= ?1", nativeQuery = true)
//	List<Plants> findAllById(Long id);
	
	@Query(value="SELECT * FROM `plants` WHERE id_user= ?1", nativeQuery = true)
	List<Plants> findAllById(Long id);
}
