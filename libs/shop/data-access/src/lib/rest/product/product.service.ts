import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopRestService } from '../shop-rest.service';
import { ProductDto, ProductListDto } from '@ecommerce/shop-backend/dto';

@Injectable()
export class ProductService {

  constructor(private restService: ShopRestService) { }

  getProductById(id: string): Observable<ProductDto> {
    return this.restService.get<ProductDto>('/product/' + id);
  }

  getProducts(): Observable<ProductListDto> {
    return this.restService.get<ProductListDto>('/product/');
  }
}
