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
  products = []
  emptyCart: boolean

  constructor(private cart: CartService, private modal: ModalService) { }

  ngOnInit() {
    this.products = this.cart.getCart();
  }

  getCartItemsCount() {
    if(this.products.length == 1) {
      this.emptyCart = false;
      this.cartItemsCount = this.products[0].quantity;
    } else if(this.products.length > 1 ) {
      this.emptyCart = false;
      this.cartItemsCount = 0;
      this.products.forEach((element) => {
        this.cartItemsCount += element.quantity;
      });
    } else {
      this.emptyCart = true;
    }
    return this.cartItemsCount;
  }

  openModal() {
    this.modal.changeModalStatus(true, this.emptyCart);
  }

}
