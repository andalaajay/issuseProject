import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssuseServiceService {

  constructor(public client:HttpClient) { }
  baseServerUrl = "http://localhost:8080";
  addIssue(description: string, option1: string): Observable<void> {
    const url = this.baseServerUrl + '/addIssue';
    const senddata = { description,option1 };
    const observable: Observable<void> = this.client.post<void>(url, senddata);
    return observable;
}
}
