import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '@ecommerce/shop/data-access';

@Component({
  selector: 'ecommerce-cru-product',
  templateUrl: './cru-product.component.html',
  styleUrls: ['./cru-product.component.scss']
})
export class CruProductComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      description: ['', Validators.maxLength(250)]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log('form', this.form);
    this.submitted = true;
  }

}
