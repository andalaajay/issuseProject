package com.Issue.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Issue.project.entity.Issue;
import com.Issue.project.repo.H2Repo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class IssueController {
	
	@Autowired
	private H2Repo repo;
	@PostMapping("/addIssue")
	public Issue add(@RequestBody Issue issue)
	{
		System.out.println("hfrwhfrugho");
		return repo.save(issue);
	}
	@GetMapping("/addIssue1")
	public String add1()
	{
		System.out.println("hfrwhfrugho");
		//repo.save(issue);
		return "vnlkr";
	}

}
