import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private inputSource = new BehaviorSubject<boolean>(false);
  modal_isOpen = this.inputSource.asObservable();

  private emptyCartSource = new BehaviorSubject<boolean>(false);
  cartEmpty = this.emptyCartSource.asObservable();
  
  private productIndexSource = new BehaviorSubject<number>(null);
  addedtocart_index = this.productIndexSource.asObservable();


  constructor() { 
     
  }

  changeModalStatus(modal_isOpen, cartEmpty: boolean) {
    this.inputSource.next(modal_isOpen);
    this.changeCartEmptyValue(cartEmpty);
  }

  changeCartEmptyValue(cartEmpty: boolean) {
    this.emptyCartSource.next(cartEmpty);
  }

  changeIndex(addedtocart_index) {
    this.productIndexSource.next(addedtocart_index);
  }

}
