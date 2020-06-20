import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@ecommerce/shared/material';
import { ShopDataAccessModule } from '@ecommerce/shop/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: () => import('@ecommerce/shop/layout')
          .then(m => m.ShopLayoutModule)},

      { path: '', pathMatch: 'full', redirectTo: 'home'},
    ], { initialNavigation: 'enabled' }),
    SharedMaterialModule,
    ShopDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
