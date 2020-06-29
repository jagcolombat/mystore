import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@ecommerce/shared/material';
import { ShopDataAccessModule } from '@ecommerce/shop/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { errorInterceptorProvider, jwtInterceptorProvider } from '@ecommerce/shared/security';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'store', loadChildren: () => import('@ecommerce/shop/layout')
          .then(m => m.ShopLayoutModule)},
      { path: '', pathMatch: 'full', redirectTo: 'store'},
      { path: '**', redirectTo: ''}
    ], {
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false
    }),
    SharedMaterialModule,
    ShopDataAccessModule
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
