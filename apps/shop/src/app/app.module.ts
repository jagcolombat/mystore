import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@ecommerce/shared/material';
import { ShopDataAccessModule } from '@ecommerce/shop/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedSecurityModule } from '@ecommerce/shared/security';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: () => import('@ecommerce/shop/layout')
          .then(m => m.ShopLayoutModule)},/*
      { path: 'login', loadChildren: () => import('@ecommerce/shared/security')
          .then(m => m.SharedSecurityModule)},*/
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: '**', redirectTo: ''}
    ], { initialNavigation: 'enabled' }),
    SharedMaterialModule,
    ShopDataAccessModule/*,
    SharedSecurityModule*/
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
