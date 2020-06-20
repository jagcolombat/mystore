import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ecommerce-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product  = {
    name: 'Rice',
    price: 4,
    description: 'Imported from Viet Nam'
  }
  @Input() showImg = true;

  constructor() { }

  ngOnInit(): void {
  }

}
