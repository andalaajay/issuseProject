package com.Issue.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Issue.project.entity.Issue;

public interface H2Repo extends JpaRepository<Issue,String>{
}
