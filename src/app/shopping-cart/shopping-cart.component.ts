import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  subtotal: string;
  shipping: number;
  taxes: number;
  orderTotal: string;
  cartEmpty: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartEmpty.subscribe(cartEmpty => this.cartEmpty = cartEmpty);
  }

  removeProduct(index: number) {
    this.cartService.removeFromCart(index);
  }

  getCartCount() {
    return this.cartService.getCart().length;
  }

  getCart() {
    return this.cartService.getCart();
  }

  getSubtotal() {
    this.subtotal = this.cartService.getSubtotal();
    return this.subtotal;
  }

  getOrderTotal() {
    this.orderTotal = this.cartService.getOrderTotal();
    return this.orderTotal;
  }

}
