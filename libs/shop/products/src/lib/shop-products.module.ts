import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { GridProductsComponent } from './grid-products/grid-products.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@ecommerce/shared/material';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild([
        { path: '', component: GridProductsComponent }
    ])
  ],
  declarations: [ProductComponent, GridProductsComponent],
  exports: [ProductComponent, GridProductsComponent]/*,
  providers: [ProductService]*/
})
export class ShopProductsModule {}
