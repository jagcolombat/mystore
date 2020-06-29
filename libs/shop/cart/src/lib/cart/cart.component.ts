import { Component, OnInit } from '@angular/core';
import { AddProductDto, ProductDto } from '@ecommerce/shop/share/dto';
import { CartDataService, ProductService } from '@ecommerce/shop/data-access';
import { ItemAction, ItemActionEnum } from '@ecommerce/shop/utils';

@Component({
  selector: 'ecommerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  item: ItemAction;
  prod2Edit: ProductDto;
  items: ProductDto[] = [];

  constructor(private cartService: CartDataService) {
    this.cartService.items.forEach((value, key) => {
      this.items.push(value);
    });
  }

  ngOnInit(): void {
  }

  updateItem(item: any) {
    //console.log('updateItem', item);
    this.cartService.items.get(item.id).quantity = item.quantity;
    this.item = {action: ItemActionEnum.UPD, item: item};
  }

  deleteProduct(product: ProductDto){
    this.cartService.items.delete(product.id);
    this.item = { action: ItemActionEnum.DEL, item: product};
  }

  editProd(prods: ProductDto[]) {
    //console.log('editProd', prods);
    this.prod2Edit = prods[0];
  }

}
