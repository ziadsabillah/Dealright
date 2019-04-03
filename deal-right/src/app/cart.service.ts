import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  alreadyInCart: boolean
  cart = []
  item_inCart = false
  constructor(private product_service: ProductDataService) { }

  addToCart(index: number) {
    
    if(this.cart.length == 0) { // If cart is empty
      this.cart.push(this.product_service.getData()[index]); // Just add the product as normal
    }
    else if(this.cart.length == 1) {  // If the cart has one product
        if(this.cart[0].id == index) { // Check if it is the same product
          this.cart[0].quantity++; //Just add the quantity of the product
        }else { //If not add the product to cart
          this.cart.push(this.product_service.getData()[index]);
        }
    } else {  //If the cart has more than 1 product

      this.cart.forEach( (element, productIndex) => { 
        if(element.id == index) { //Check if any of the elements index is our product
          element.quantity = element.quantity + 1; //Add the quantity
          this.item_inCart = true;  
          console.log("Quantity Added ", element.id);
        }else if(element.id != index && this.item_inCart == false) {
          if(productIndex == this.cart.length -1) {
            this.cart.push(this.product_service.getData()[index]);            
          }
        }
      }); 
    }
  }

  getCart() {
    return this.cart;
  }
}
