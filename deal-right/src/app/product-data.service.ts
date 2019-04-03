import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  ft_products = [
    {
      "id": 0,
      "name": "Product 1",
      "price": 24.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 1,
      "name": "Product 2",
      "price": 34.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1
    }, {
      "id": 2,
      "name": "Product 3",
      "price": 44.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 3,
      "name": "Product 4",
      "price": 54.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1

    }
  ]

  all_products = [
    {
      "id": 0,
      "name": "Product 1",
      "price": 24.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 1,
      "name": "Product 2",
      "price": 34.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1
    }, {
      "id": 2,
      "name": "Product 3",
      "price": 44.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 3,
      "name": "Product 4",
      "price": 54.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1

    }
  ]

  constructor(private http: HttpClient) { }

  getData() {
    return this.all_products;
  }
}
