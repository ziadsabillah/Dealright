import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';
import { BehaviorSubject } from 'rxjs';

const DISCOUNT_MIN = 50;
const STANDARD_SHIPPING = 5.99;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private emptyCartCheckSource = new BehaviorSubject<boolean>(true);
  cartEmpty = this.emptyCartCheckSource.asObservable();

  alreadyInCart: boolean;
  cart = [];
  item_inCart = false;
  cartCount: number;

  cartSubtotal = 0;
  shippingCost = 0;
  taxes = 0;
  orderTotal = 0;

  constructor(private product_service: ProductDataService) { }

  addToCart(index: number) {
    
    this.setCartEmpty(false);

    if(this.cart.length === 0) { // If cart is empty
      this.cart.push(this.product_service.getAllProducts()[index]); // Just add the product as normal
    }
    else if(this.cart.length === 1) { // If the cart has one product
        if(this.cart[0].id === index) { // Check if it is the same product
          this.cart[0].quantity++; // Just add the quantity of the product
        }else {                   // If not add the product to cart
          this.cart.push(this.product_service.getAllProducts()[index]);
        }
    } else {  // If the cart has more than 1 product
        this.cart.forEach( (element, productIndex) => {
        if(element.id === index) {                  // Check if any of the elements index is our product
          element.quantity++; // Add the quantity
          this.item_inCart = true;  
        }else if(element.id != index && this.item_inCart === false) {
          if(productIndex === this.cart.length -1) {
            this.cart.push(this.product_service.getAllProducts()[index]);            
          }
        }
      }); 
    }
  }

  removeFromCart(index: number) {
    if(this.cart.length === 1) {
      this.cart = [];
      this.setCartEmpty(true);
    }
  }

  getCart() {
    return this.cart;
  }

  setCartEmpty(cartEmpty: boolean) {
    this.emptyCartCheckSource.next(cartEmpty);
  }

  getSubtotal() {
    this.cartSubtotal = 0;
    this.cart.forEach((element) => {
      this.cartSubtotal += element.price * element.quantity;
    });

    return this.cartSubtotal.toFixed(2);
  }

  getTaxes() {
    return this.taxes;
  }

  setTaxes(value: number) {
    this.taxes = value;
  }

  getShippingCost() {
    if (this.cartSubtotal >= 50) {
      return 'FREE';
    } else {
      return STANDARD_SHIPPING;
    }
  }

  setShippingCost(value: number) {
    this.shippingCost = value;
  }

  getOrderTotal() {
    this.orderTotal = this.cartSubtotal + this.shippingCost + this.taxes;
    return this.orderTotal.toFixed(2);
  }
}
