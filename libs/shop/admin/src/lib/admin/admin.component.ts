import { Component, OnInit } from '@angular/core';
import { ProductService } from '@ecommerce/shop/data-access';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ecommerce-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  /*columDefs: any;
  data: any;*/

  constructor(private prodService: ProductService) {
    /*this.columDefs = [
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
    ]

    this.prodService.getProducts().subscribe(
      next => {
        console.log('products', next);
        this.data = next.products;
      },
      error1 => console.error(error1)
    );*/
  }

  ngOnInit(){}

}
