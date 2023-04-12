import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '../model/Issue';
import { IssuseServiceService } from '../service/issuse-service.service';


@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {

constructor(private router:Router,private client:HttpClient) {
  
 }
  issue!: Issue;

  

  description: string = '';
  option1:string='';
  
  setValue(description:string,option1:string) {
    console.log('First Name: ',description);
    console.log('option1=: ',option1);
    this.issue=new Issue(description,option1);
    console.log("objebhfvbrhib"+this.issue)
    this.save(description,option1); 
  }

  public save(description:string,option1:string) {
    const baseServerUrl = 'http://localhost:8080/addIssue';
    console.log(baseServerUrl);
    //console.log(issue);
    const data={description,option1};
     this.client.post<void>(baseServerUrl,data);
  }



}

/*
his.userService.save(this.user).subscribe(result => this.gotoUserList());
*/
