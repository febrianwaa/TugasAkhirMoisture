package com.moisture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


import com.moisture.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
//	public List<Buku> findAll();
	@Query(value = "SELECT *\n"
			+ "from user\n"
			+ "Where (CASE "
			+ "WHEN 'username'=:type THEN username LIKE %:value% "
			+ "WHEN 'email'=:type THEN email LIKE %:value% "
			+ "WHEN 'password'=:type THEN password LIKE %:value% "
			
			+ "END)",nativeQuery=true)
	List<User> findBySearchBy(@Param("type")String type,@Param("value")String value);
	
	User findByUsername(String username);
	
	@Query(value="SELECT * from user where username=?1 and password=?2", nativeQuery = true)
	User loginUser(String username,String password);
}
