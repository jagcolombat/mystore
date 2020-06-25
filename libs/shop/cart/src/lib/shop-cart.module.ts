import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopUiModule } from '@ecommerce/shop/ui';
import { QuantityComponent } from './quantity/quantity.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShopUiModule,
    ReactiveFormsModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: CartComponent}
    ]),
  ],
  declarations: [CartComponent, QuantityComponent],
})
export class ShopCartModule {}
