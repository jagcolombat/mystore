import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ShopUiModule } from '@ecommerce/shop/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ShopUiModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'products'},
          {
            path: 'products',
            loadChildren: () => import('@ecommerce/shop/products')
              .then(m => m.ShopProductsModule)
          },
          {
            path: 'admin',
            loadChildren: ( ) => import('@ecommerce/shop/admin')
              .then(m => m.ShopAdminModule),
            canActivate: [AuthGuard]
          },
          {
            path: 'login',
            loadChildren: ( ) => import('@ecommerce/shared/security')
              .then(m => m.SharedSecurityModule)
          },
          {
            path: 'logout', redirectTo: 'products'
          }
        ]
      }
    ])
  ],
  declarations: [MainComponent],
})
export class ShopLayoutModule {}
