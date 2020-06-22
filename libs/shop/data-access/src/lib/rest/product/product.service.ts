import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopRestService } from '../shop-rest.service';
import { AddProductDto, ProductDto, ProductListDto  } from '@ecommerce/shop/share/dto';

@Injectable()
export class ProductService {

  constructor(private restService: ShopRestService) { }

  getProductById(id: string): Observable<ProductDto> {
    return this.restService.get<ProductDto>('/product/' + id);
  }

  getProducts(): Observable<ProductListDto> {
    return this.restService.get<ProductListDto>('/product/');
  }

  saveProduct(product: AddProductDto): Observable<any> {
    return this.restService.post<any, any>('/product/', product);
  }

  updateProduct(product: ProductDto): Observable<any> {
    return this.restService.put<any, any>('/product/' + product.id ,product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.restService.delete<any>('/product/' + id);
  }
}
