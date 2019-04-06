import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContactModule { }
