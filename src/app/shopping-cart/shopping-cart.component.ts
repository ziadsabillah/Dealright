import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  
  

  constructor(private cart_service: CartService) { }

  ngOnInit() {
  }

  getCartCount() {
    return this.cart_service.getCart().length;
  }

  getCart() {
    return this.cart_service.getCart();
  }
}
