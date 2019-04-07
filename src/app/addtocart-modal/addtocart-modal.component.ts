import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { CartService } from '../cart.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-addtocart-modal',
  templateUrl: './addtocart-modal.component.html',
  styleUrls: ['./addtocart-modal.component.css']
})
export class AddtocartModalComponent implements OnInit {

  modal_isOpen: boolean
  products = []
  _subscription: Subscription
  cartItemsNumber = 0
  totalPrice = 0
  cartEmpty: boolean
  
  constructor(private modal_service: ModalService, private cart: CartService) {
  }

  ngOnInit() {
    this.products = this.cart.getCart();
    this._subscription = this.modal_service.modal_isOpen.subscribe(modal_isOpen => this.modal_isOpen = modal_isOpen);
    this.modal_service.cartEmpty.subscribe(cartEmpty => this.cartEmpty = cartEmpty);
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
    this.modal_service.cartEmpty.subscribe(cartEmpty => this.cartEmpty = cartEmpty).unsubscribe;
  }

  getCartCount() {
    if(this.products.length == 1) { //If the cart has only 1 product
      this.cartItemsNumber = this.products[0].quantity; //Set it to the quantity
    } else if (this.products.length > 1) { // If it has more than 1 product
      this.cartItemsNumber = 0; //Set the value at 0. because we're iterating over all elements again
      this.products.forEach(element => {  
      this.cartItemsNumber += element.quantity;
      });
    }
    if(this.cartItemsNumber == undefined || this.cartItemsNumber == 0 || this.cartItemsNumber == null) {
      this.cartItemsNumber = 0;
      this.cartEmpty = true;
    }
    
    return this.cartItemsNumber;

  }
  getTotalPrice() {
    if(this.products.length == 1) { 
      this.totalPrice= this.products[0].quantity * this.products[0].price;
    } else if (this.products.length > 1) {
      this.totalPrice = 0; //Setting the value at 0 because we're gonna be iterating over all products again
      this.products.forEach((element) => {
        this.totalPrice += element.quantity * element.price;
      });
    }
    return this.totalPrice.toFixed(2);
  }

  checkCartEmpty() {
    if(this.cartItemsNumber == undefined || this.cartItemsNumber == 0 || this.cartItemsNumber == null) {
      this.cartItemsNumber = 0;
      this.cartEmpty = true;
    }else {
      this.cartEmpty = false;
    }
  }

  changeModalStatus(status: boolean) {
    console.log("modal status changed to ", status);
    this.modal_isOpen = status;
  }
}
