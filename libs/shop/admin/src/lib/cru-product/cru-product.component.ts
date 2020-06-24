import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from '@ecommerce/shop/data-access';
import { ProductDto } from '@ecommerce/shop/share/dto';

@Component({
  selector: 'ecommerce-cru-product',
  templateUrl: './cru-product.component.html',
  styleUrls: ['./cru-product.component.scss']
})
export class CruProductComponent implements OnInit, OnChanges {
  @ViewChild('formDirective') private formDirective: NgForm;
  @Output() evAddProd = new EventEmitter<ProductDto>();
  @Output() evUpdateProd = new EventEmitter<ProductDto>();
  @Input() prod2Edit: ProductDto = { id: '', name: '', price: undefined, description: '' };

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private prodService: ProductService) { }

  ngOnChanges(sc: SimpleChanges){
    console.log('changes', sc);
    if(sc['prod2Edit']) {
      this.form.patchValue({
          name: this.prod2Edit.name,
          price: this.prod2Edit.price,
          description: this.prod2Edit.description
        },
      )
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.prod2Edit);
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      description: ['', Validators.maxLength(250)]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log('form', this.f);
    this.submitted = true;
    if(this.form.valid){
      console.log(this.prod2Edit)
      this.prod2Edit && this.prod2Edit.id !== undefined ? this.updateProduct() : this.saveProduct();
    }
  }

  saveProduct(){
    this.prodService.saveProduct({
      name: this.f.name.value,
      price: this.f.price.value,
      description: this.f.description.value
    }).subscribe(next => {
      console.log(next);
      this.evAddProd.emit(next);
      this.formDirective.resetForm();
    }, error1 => console.error(error1))
  }

  updateProduct(){
    this.prodService.updateProduct({
      id: this.prod2Edit.id,
      name: this.f.name.value,
      price: this.f.price.value,
      description: this.f.description.value
    }).subscribe(next => {
      console.log(next);
      this.evUpdateProd.emit(next);
      this.formDirective.resetForm();
    }, error1 => console.error(error1))
  }

}
