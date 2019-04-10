import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private inputSource = new BehaviorSubject<boolean>(false);
  modal_isOpen = this.inputSource.asObservable();

  
  
  private productIndexSource = new BehaviorSubject<number>(null);
  addedtocart_index = this.productIndexSource.asObservable();


  constructor(private cartService: CartService) { 
     
  }

  changeModalStatus(modal_isOpen, cartEmpty?: boolean) {
    this.inputSource.next(modal_isOpen);
    if(cartEmpty != null) {
      this.cartService.setCartEmpty(cartEmpty);
    }
  }

  changeIndex(addedtocart_index) {
    this.productIndexSource.next(addedtocart_index);
  }

}
