import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  cartItemsCount = 0;
  emptyCart: boolean;

  constructor(private cart: CartService, private modal: ModalService) { }

  ngOnInit() {
  }

  getCartItemsCount() {
    if(this.cart.getCart().length === 1) {
      this.emptyCart = false;
      this.cartItemsCount = this.cart.getCart()[0].quantity;
    } else if(this.cart.getCart().length > 1 ) {
      this.emptyCart = false;
      this.cartItemsCount = 0;
      this.cart.getCart().forEach((element) => {
        this.cartItemsCount += element.quantity;
      });
    } else {
      this.cartItemsCount = 0;
      this.cart.setCartEmpty(true);
    }
    return this.cartItemsCount;
  }

  openModal() {
    this.modal.changeModalStatus(true, this.emptyCart);
  }

}
