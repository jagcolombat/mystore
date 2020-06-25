import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedMaterialModule } from '@ecommerce/shared/material';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule, AgGridModule.withComponents([])],
  declarations: [HeaderComponent, ToolbarComponent, FooterComponent, AgGridComponent, ManageProductsComponent],
  exports: [SharedMaterialModule, HeaderComponent, ToolbarComponent, FooterComponent, AgGridComponent, ManageProductsComponent]
})
export class ShopUiModule {}
