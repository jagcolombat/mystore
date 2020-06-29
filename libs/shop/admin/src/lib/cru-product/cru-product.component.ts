import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddProductDto, ProductDto } from '@ecommerce/shop/share/dto';

@Component({
  selector: 'ecommerce-cru-product',
  templateUrl: './cru-product.component.html',
  styleUrls: ['./cru-product.component.scss']
})
export class CruProductComponent implements OnInit, OnChanges {
  @ViewChild('formDirective') private formDirective: NgForm;
  @Output() evAddProd = new EventEmitter<AddProductDto>();
  @Output() evUpdateProd = new EventEmitter<ProductDto>();
  @Input() prod2Edit: ProductDto = { id: '', name: '', price: undefined, description: '' };
  @Input() error = '';

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      description: ['', Validators.maxLength(250)]
    })
  }

  ngOnChanges(sc: SimpleChanges){
    //console.log('changes', sc);
    if(sc['prod2Edit']) {
      this.form.patchValue({
          name: this.prod2Edit.name,
          price: this.prod2Edit.price,
          description: this.prod2Edit.description
        },
      )
    }
    if(sc['error']) {
      //console.error(sc['error']);
      //if(sc['error']) this.formDirective.resetForm();
    }
  }

  ngOnInit(): void {
    //console.log('ngOnInit', this.prod2Edit);
  }

  get f() { return this.form.controls; }

  onSubmit() {
    //console.log('form', this.f);
    this.submitted = true;
    if(this.form.valid){
      //console.log(this.prod2Edit)
      this.prod2Edit && this.prod2Edit.id !== '' ? this.updateProduct() : this.saveProduct();
    }
  }

  saveProduct(){
    this.evAddProd.emit({
      name: this.f.name.value,
      price: this.f.price.value,
      description: this.f.description.value
    });
    this.formDirective.resetForm();
  }

  updateProduct(){
    this.evUpdateProd.emit({
      id: this.prod2Edit.id,
      name: this.f.name.value,
      price: this.f.price.value,
      description: this.f.description.value
    });
    this.resetProdEdit();
    this.formDirective.resetForm();
  }

  resetProdEdit(){
    this.prod2Edit = { id: '', name: '', price: undefined, description: '' };
  }

}
