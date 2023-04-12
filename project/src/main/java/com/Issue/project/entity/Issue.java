package com.Issue.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Issue {
	
	@Id
	private String description;
	private String option1;
	
	public Issue() {}
	public Issue(String description, String option1) {
		super();
		this.description = description;
		this.option1 = option1;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOption1() {
		return option1;
	}
	public void setOption1(String option1) {
		this.option1 = option1;
	}
	
	
	
	

}
