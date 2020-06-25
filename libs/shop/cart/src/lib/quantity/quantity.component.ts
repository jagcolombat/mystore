import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ecommerce-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit, OnChanges {

  @ViewChild('formQDirective') private formQDirective: NgForm;
  @Output() evUpdateProd = new EventEmitter<any>();
  @Input() prod2Edit = { id: '', name: '', price: undefined, description: '', quantity: undefined };
  @Input() error = '';

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    })
  }

  ngOnChanges(sc: SimpleChanges){
    console.log('changes', sc);
    if(sc['prod2Edit'] && sc['prod2Edit'].currentValue) {
      this.form.patchValue({
          quantity: sc['prod2Edit'].currentValue.quantity
        },
      )
    }
    if(sc['error']) {
      console.error(sc['error']);
      //if(sc['error']) this.formDirective.resetForm();
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.prod2Edit);
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log('form', this.f);
    this.submitted = true;
    if(this.form.valid){
      console.log(this.prod2Edit)
      this.updateProduct();
    }
  }

  updateProduct(){
    this.evUpdateProd.emit({
      id: this.prod2Edit.id,
      name: this.prod2Edit.name,
      price: this.prod2Edit.price,
      description: this.prod2Edit.description,
      quantity: this.f.quantity.value
    });
    this.resetProdEdit();
    this.formQDirective.resetForm();
  }

  resetProdEdit(){
    this.prod2Edit = { id: '', name: '', price: undefined, description: '', quantity: undefined };
  }

}
