import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { RouterModule } from '@angular/router';


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
  ]
})
export class CatalogModule { }
