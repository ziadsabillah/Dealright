import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  ft_products = [
    {
      "id": 0,
      "name": "Magical Trio Peeler™",
      "price": 24.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 1,
      "name": "Super Absorbent Doormat™",
      "price": 34.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1
    }, {
      "id": 2,
      "name": "TakIt™ Efficient Makeup Bag",
      "price": 44.99,
      "available": true,
      "img_url": "../../assets/makeupbag.jpg",
      "quantity": 1
    },  {
      "id": 3,
      "name": "Wrinkle-Free™ Eye Gel",
      "price": 54.99,
      "available": true,
      "img_url": "../../assets/eyegel.jpg",
      "quantity": 1

    }
  ]

  all_products = [
    {
      "id": 0,
      "name": "Magical Trio Peeler™",
      "price": 24.99,
      "available": true,
      "img_url": "../../assets/product1.jpg",
      "quantity": 1
    }, {
      "id": 1,
      "name": "Super Absorbent Doormat™",
      "price": 34.99,
      "available": true,
      "img_url": "../../assets/product2.jpg",
      "quantity": 1
    }, {
      "id": 2,
      "name": "TakIt™ Efficient Makeup Bag",
      "price": 44.99,
      "available": true,
      "img_url": "../../assets/makeupbag.jpg",
      "quantity": 1
    }, {
      "id": 3,
      "name": "Wrinkle-Free™ Eye Gel",
      "price": 54.99,
      "available": true,
      "img_url": "../../assets/eyegel.jpg",
      "quantity": 1

    }
  ]

  constructor(private http: HttpClient) { }

  getData() {
    return this.ft_products;
  }
}
