import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../addtocart-modal/modal.module';
import { MatButtonModule } from '@angular/material/button';


const routes = [
  {
    path: '',
    component: CatalogComponent
  }
];

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ModalModule,
    MatButtonModule
  ]
})
export class CatalogModule { }
