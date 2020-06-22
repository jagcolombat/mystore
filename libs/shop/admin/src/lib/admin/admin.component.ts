import { Component, OnInit } from '@angular/core';
import { ProductDto } from '@ecommerce/shop/share/dto';
import { ItemAction } from '../utils/item-action';
import { ItemActionEnum } from '../utils/item-action.enum';

@Component({
  selector: 'ecommerce-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  product: ItemAction;
  prod2Edit: ProductDto;
  //updatedProd: ProductDto;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(product: ProductDto) {
    console.log('addProduct', product);
    this.product = {action: ItemActionEnum.ADD, item:product};
  }

  updateProduct(product: ProductDto) {
    console.log('updateProduct', product);
    this.product = {action: ItemActionEnum.UPD, item:product};
  }

  editProd(prods: ProductDto[]) {
    console.log('editProd', prods);
    this.prod2Edit = prods[0];
  }
}
