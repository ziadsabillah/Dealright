import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []

  constructor(private product_service: ProductDataService) { }

  addToCart(index: number) {
    this.cart.push(this.product_service.getData()[index]);
    console.log(this.cart);
  }
}
