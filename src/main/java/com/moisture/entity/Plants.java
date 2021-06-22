package com.moisture.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="plants")
public class Plants {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String image;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "plantsDetail", referencedColumnName = "id")
    private PlantsDetails plantsDetail;
    
//    @ManyToOne(cascade = CascadeType.MERGE)
//   	@JoinColumn(name="idUser", referencedColumnName = "id")
//   	private User idUser;
}
