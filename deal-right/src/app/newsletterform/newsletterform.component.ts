import { Component, OnInit } from '@angular/core';
import { EMPTY_ARRAY } from '@angular/core/src/view';
import {EmailListService} from '../email-list.service';

@Component({
  selector: 'app-newsletterform',
  templateUrl: './newsletterform.component.html',
  styleUrls: ['./newsletterform.component.css']
})
export class NewsletterformComponent implements OnInit {
  
  email = ''

  constructor (private email_service: EmailListService ) {

  }

  ngOnInit() {
  }

  addEmail(email: string) {
    this.email_service.addEmail(email);
    console.log(this.email_service.getEmails());
  }
}
