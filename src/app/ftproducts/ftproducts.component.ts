import { Component, OnInit, Input } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { CartService } from '../cart.service';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ftproducts',
  templateUrl: './ftproducts.component.html',
  styleUrls: ['./ftproducts.component.css']
})
export class FtproductsComponent implements OnInit {

  addedtocart_index: number
  modal_isOpen = false
  products = []
  _subscription: Subscription
  cartEmpty: boolean;


  constructor(private product_service: ProductDataService, private cart_service: CartService, private modal: ModalService) { }

  ngOnInit() {
    this.modal.changeModalStatus(false, this.cartEmpty);
    this.products = this.product_service.getFeaturedProducts();
    this._subscription = this.modal.modal_isOpen.subscribe(modal_isOpen => this.modal_isOpen = modal_isOpen);
    this.modal.addedtocart_index.subscribe(addedtocart_index => this.addedtocart_index = this.addedtocart_index);
    this.cart_service.cartEmpty.subscribe(cartEmpty => this.cartEmpty = cartEmpty);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe;
  }

  checkCartEmptiness() {
    if(this.products.length === 0) {
      this.cart_service.setCartEmpty(true);
    } else {
      this.cart_service.setCartEmpty(false);
    }

    console.log('checked cart emptiness', this.cartEmpty);
  }

  addProductToCart(index: number) {
    this.cart_service.addToCart(index);
    this.modal.changeIndex(index);
    this.openModal();
  }

  openModal() {
    this.modal.changeModalStatus(true);
    console.log("modal is open")
    this.checkCartEmptiness();
  }
}
