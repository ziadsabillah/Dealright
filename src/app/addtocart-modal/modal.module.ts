import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtocartModalComponent } from './addtocart-modal.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AddtocartModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    NgbModule
  ],
  exports: [
    AddtocartModalComponent
  ]
})
export class ModalModule { }
