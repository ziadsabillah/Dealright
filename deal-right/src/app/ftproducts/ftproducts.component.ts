import { Component, OnInit, Input } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { CartService } from '../cart.service';
import { ModalService } from '../modal.service';
import { AddtocartModalComponent } from '../addtocart-modal/addtocart-modal.component';

@Component({
  selector: 'app-ftproducts',
  templateUrl: './ftproducts.component.html',
  styleUrls: ['./ftproducts.component.css']
})
export class FtproductsComponent implements OnInit {

  addedtocart_index: number
  modal_isOpen: boolean
  products = []


  constructor(private product_service: ProductDataService, private cart_service: CartService, private modal: ModalService) { }

  ngOnInit() {
    this.products = this.product_service.getData();
    this.modal.modal_isOpen.subscribe(modal_isOpen => this.modal_isOpen = modal_isOpen);
    this.modal.addedtocart_index.subscribe(addedtocart_index => this.addedtocart_index = this.addedtocart_index);
  }

  addProductToCart(index: number) {
    this.cart_service.addToCart(index);
    this.modal.changeIndex(index);
    this.openModal();
  }

  openModal() {
    this.modal.changeModalStatus(true);
    console.log("modal is open")
  }
}
