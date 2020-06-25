import { Component, OnInit } from '@angular/core';
import { AddProductDto, ProductDto } from '@ecommerce/shop/share/dto';
import { ItemAction } from '../utils/item-action';
import { ItemActionEnum } from '../utils/item-action.enum';
import { ProductService } from '@ecommerce/shop/data-access';

@Component({
  selector: 'ecommerce-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  product: ItemAction;
  prod2Edit: ProductDto;
  private responseErr = '';
  products: ProductDto[];

  constructor(private prodService: ProductService) {
    this.prodService.getProducts().subscribe(
      next => {
        console.log('products', next);
        this.products = next.products;
      },
      error1 => console.error(error1)
    );
  }

  ngOnInit(): void {
  }

  addProduct(product: AddProductDto) {
    console.log('addProduct', product);
    this.prodService.saveProduct(product).subscribe(next => {
      console.log('added product',next);
      this.product = {action: ItemActionEnum.ADD, item: next};
      this.responseErr="";
    }, error1 => {
      console.error(error1);
      this.responseErr = error1;
    });
  }

  updateProduct(product: ProductDto) {
    console.log('updateProduct', product);
    this.prodService.updateProduct(product).subscribe(next => {
      console.log('updated product',next);
      this.product = {action: ItemActionEnum.UPD, item: next};
      this.responseErr="";
    }, error1 => {
      console.error(error1);
      this.responseErr = error1;
    })
  }

  deleteProduct(product: ProductDto){
    this.prodService.deleteProduct(product.id).subscribe(
      next => {
        console.log('deleted product', next);
        this.product = { action: ItemActionEnum.DEL, item: product};
      },
      error1 => console.error(error1)
    );
  }

  editProd(prods: ProductDto[]) {
    console.log('editProd', prods);
    this.prod2Edit = prods[0];
  }
}
