import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { GridProductsComponent } from './grid-products/grid-products.component';
import { CruProductComponent } from './cru-product/cru-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent, GridProductsComponent, CruProductComponent, ManageProductsComponent],
})
export class ShopProductsModule {}
