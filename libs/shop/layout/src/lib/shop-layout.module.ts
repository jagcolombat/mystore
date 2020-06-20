import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ShopUiModule } from '@ecommerce/shop/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ShopUiModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          {
            path: 'products',
            loadChildren: () => import('@ecommerce/shop/products')
              .then(m => m.ShopProductsModule)
          },
          {
            path: 'admin',
            loadChildren: ( ) => import('@ecommerce/shop/admin')
              .then(m => m.ShopAdminModule)
          }
        ]
      }
    ])
  ],
  declarations: [MainComponent],
})
export class ShopLayoutModule {}
