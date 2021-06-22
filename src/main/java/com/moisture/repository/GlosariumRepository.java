package com.moisture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.moisture.entity.Glosarium;

public interface GlosariumRepository extends JpaRepository<Glosarium, Long>{
	@Query(value = "SELECT *\n"
			+ "from glosarium\n"
			+ "Where (CASE "
			+ "WHEN 'name'=:type THEN name LIKE %:value% "
			+ "WHEN 'humidity'=:type THEN humidity LIKE %:value% "
			+ "END)",nativeQuery=true)
	List<Glosarium> findBySearchBy(@Param("type")String type,@Param("value")String value);
	
	
	@Query(value="SELECT * FROM glosarium ORDER BY name ASC", nativeQuery = true)
	List<Glosarium> findAllByName(String name);
}
