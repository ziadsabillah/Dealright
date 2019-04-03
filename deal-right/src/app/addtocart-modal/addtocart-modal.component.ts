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
  
  constructor(private modal_service: ModalService, private cart: CartService) {

  }

  ngOnInit() {
    this.products = this.cart.getCart();
    this._subscription = this.modal_service.modal_isOpen.subscribe(modal_isOpen => this.modal_isOpen = modal_isOpen);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  changeModalStatus(status: boolean) {
    console.log("modal status changed to ", status);
    this.modal_isOpen = status;
  }
}
