import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ftproducts',
  templateUrl: './ftproducts.component.html',
  styleUrls: ['./ftproducts.component.css']
})
export class FtproductsComponent implements OnInit {

  products = []

  constructor(private product_service: ProductDataService, private cart_service: CartService) { }

  ngOnInit() {

    this.products = this.product_service.getData();

  }

  addProductToCart(index: number) {
    this.cart_service.addToCart(index);
  }

}
