import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto } from '@ecommerce/shop/share/dto';
import { ItemAction } from '@ecommerce/shop/utils';

@Component({
  selector: 'ecommerce-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  @Input() title = "List of Products";
  @Input() cart: boolean;
  @Input() data: any;
  @Input() addProd: ItemAction;
  @Output() evEditProd= new EventEmitter<ProductDto[]>();
  @Output() evDelProd= new EventEmitter<ProductDto[]>();
  columnDefs: any;
  editBtnDisabled = true;
  delBtnDisabled = true;
  selectedProds: any[];

  constructor() {
    this.columnDefs = [
      {
        field: 'name',
        title: 'Name',
        width: 80
      },
      {
        field: 'description',
        title: 'Description',
        width: 100
      },
      {
        field: 'price',
        title: 'Price',
        width: 50,
        type: 'numericColumn'
      }
    ];
  }

  ngOnInit(): void {
    if(this.cart) {
      this.columnDefs.push({
        field: 'quantity',
        title: 'Quantity',
        width: 50,
        type: 'numericColumn',
        cellEditor: 'numericEditor',
        editable: true,
      });
    }

  }

  selProduct(selectedProds: any[]) {
    //console.log('selProduct', selectedProds);
    this.selectedProds = selectedProds;
    /*if(selectedProds.length > 1){
      this.delBtnDisabled = false;
      this.editBtnDisabled = true;
    } else*/ if(selectedProds.length === 1){
      this.editBtnDisabled = this.delBtnDisabled = false;
    } else {
      this.editBtnDisabled = this.delBtnDisabled = true;
    }
  }

  deleteProd() {
    //console.log('deleteProd', this.selectedProds);
    this.evDelProd.emit(this.selectedProds[0]);
  }

  editProd() {
    //console.log('editProd', this.selectedProds);
    this.evEditProd.emit(this.selectedProds);
  }
}
