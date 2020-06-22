import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '@ecommerce/shop/data-access';
import { ProductDto } from '@ecommerce/shop/share/dto';
import { ItemAction } from '../utils/item-action';
import { ItemActionEnum } from '../utils/item-action.enum';

@Component({
  selector: 'ecommerce-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  @Input() addProd: ItemAction;
  @Output() evEditProd= new EventEmitter<ProductDto[]>();
  @Output() evDelProds= new EventEmitter<ProductDto[]>();
  columDefs: any;
  data: any;
  editBtnDisabled = true;
  delBtnDisabled = true;
  selectedProds: any[];

  constructor(private prodService: ProductService) {
    this.columDefs = [
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

    this.prodService.getProducts().subscribe(
      next => {
        console.log('products', next);
        this.data = next.products;
      },
      error1 => console.error(error1)
    );
  }

  ngOnInit(): void {
  }

  selProduct(selectedProds: any[]) {
    console.log('selProduct', selectedProds);
    this.selectedProds = selectedProds;
    if(selectedProds.length > 1){
      this.delBtnDisabled = false;
      this.editBtnDisabled = true;
    } else if(selectedProds.length === 1){
      this.editBtnDisabled = this.delBtnDisabled = false;
    } else {
      this.editBtnDisabled = this.delBtnDisabled = true;
    }
  }

  deleteProd() {
    console.log('deleteProd', this.selectedProds);
    this.prodService.deleteProduct(this.selectedProds[0].id).subscribe(
      next => {
        console.log('deleted products', next);
        //this.evDelProds.emit(this.selectedProds[0]);
        this.addProd = { action: ItemActionEnum.DEL, item: this.selectedProds[0]};
      },
      error1 => console.error(error1)
    );
  }

  editProd() {
    console.log('editProd', this.selectedProds);
    this.evEditProd.emit(this.selectedProds);
  }
}
