import { Injectable } from '@angular/core';
import { ProductDto } from '@ecommerce/shop/share/dto';

export interface ItemCart {
  id: string,
  name: string,
  price: number,
  description: string,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  items: Map<string, ItemCart> = new Map<string, ItemCart>();

  constructor() { }

  addItem(prod: ProductDto) {
    const quantity = (this.items.has(prod.id)) ? this.items.get(prod.id).quantity + 1 : 1;
    const item = {...prod, quantity};
    this.items.set(prod.id, <ItemCart>item );
  }
}
