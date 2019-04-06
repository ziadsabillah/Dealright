import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ModalService } from '../modal.service';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products = []
  modal_isOpen = false
  _subscription_modal: Subscription
  addedtocart_index: number

  constructor(private cart: CartService, private product_service: ProductDataService, private modal: ModalService) { }

  ngOnInit() {
    this.modal.changeModalStatus(false);
    this.products = this.product_service.getAllProducts();
    this._subscription_modal = this.modal.modal_isOpen.subscribe(modal_isOpen =>this.modal_isOpen = modal_isOpen);
    this.modal.addedtocart_index.subscribe(addedtocart_index => this.addedtocart_index = addedtocart_index);
  }

  ngOnDestroy() {
    this._subscription_modal.unsubscribe;
  }

  addProductToCart(index: number) {
    this.cart.addToCart(index);
    this.modal.changeIndex(index);
    this.openModal();
  }

  openModal() {
    this.modal.changeModalStatus(true);
    console.log("changed modal status to true");
  }

}
