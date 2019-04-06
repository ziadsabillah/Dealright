import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailListService {

  emailList = []

  constructor(private http: HttpClient) { }

  addEmail(email:string) {
    this.emailList.push(email);
  }

  getEmails() {
    return this.emailList;
  }
}
