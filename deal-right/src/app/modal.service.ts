import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService{

  private inputSource = new BehaviorSubject<boolean>(false);
  modal_isOpen = this.inputSource.asObservable();
  
  private productIndexSource = new BehaviorSubject<number>(null);
  addedtocart_index = this.productIndexSource.asObservable();

  constructor() { 
     
  }

  changeModalStatus(modal_isOpen) {
    this.inputSource.next(modal_isOpen);
  }

  changeIndex(addedtocart_index) {
    this.productIndexSource.next(addedtocart_index);
  }

}
