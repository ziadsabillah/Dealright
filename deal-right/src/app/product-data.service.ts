import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  products = [
    {
      "name": "Product 1",
      "price": "24.99$",
      "available": true,
      "img_url": "../../assets/product1.jpg"
    }, {
      "name": "Product 2",
      "price": "34.99$",
      "available": true,
      "img_url": "../../assets/product2.jpg"
    }, {
      
      "name": "Product 3",
      "price": "44.99$",
      "available": true,
      "img_url": "../../assets/product1.jpg"
    }, {
      "name": "Product 4",
      "price": "54.99$",
      "available": true,
      "img_url": "../../assets/product2.jpg"

    }
  ]

  constructor(private http: HttpClient) { }

  getData() {
    return this.products;
  }
}
