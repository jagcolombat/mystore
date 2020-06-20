import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedApiModule } from '@ecommerce/shared/api';
import { ShopRestService } from './rest/shop-rest.service';
import { ProductService } from './rest/product/product.service';

@NgModule({
  imports: [CommonModule, SharedApiModule],
  providers: [ShopRestService, ProductService]
})
export class ShopDataAccessModule {}
