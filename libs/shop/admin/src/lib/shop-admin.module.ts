import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ShopUiModule } from '@ecommerce/shop/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { CruProductComponent } from './cru-product/cru-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', component: AdminComponent}
    ]),
    ShopUiModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, CruProductComponent, ManageProductsComponent],
})
export class ShopAdminModule {}
