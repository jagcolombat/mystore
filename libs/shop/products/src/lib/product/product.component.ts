import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto } from '@ecommerce/shop/share/dto';

@Component({
  selector: 'ecommerce-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductDto;
  @Input() showImg = true;
  @Output() evAdd2Cart = new EventEmitter<ProductDto>();

  constructor() { }

  ngOnInit(): void {
  }

  add2Cart(){
    this.evAdd2Cart.emit(this.product);
  }

}
