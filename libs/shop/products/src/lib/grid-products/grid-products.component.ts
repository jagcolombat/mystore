import { Component, Input, OnInit } from '@angular/core';
import { CartDataService, ProductService } from '@ecommerce/shop/data-access';
import { ProductDto, ProductListDto } from '@ecommerce/shop/share/dto';

@Component({
  selector: 'ecommerce-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss']
})
export class GridProductsComponent implements OnInit {

  products: ProductListDto | ProductDto[];
  @Input() showImgProd: boolean;

  constructor(private prodService: ProductService, private cartData: CartDataService) {
    this.prodService.getProducts().subscribe(
      next => {
        //console.log('products', next);
        this.products = next.products;
      },
        error1 => console.error(error1)

    );
  }

  ngOnInit(): void {
  }

  add2Cart(prod: ProductDto){
    //console.log('add2Cart', prod);
    this.cartData.addItem(prod);
  }

}
