import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@ecommerce/shared/security';
import { first } from 'rxjs/operators';
import { MustMatch } from '../utils/validators/mustmatch.validator';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'ecommerce-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm;
  registerForm: FormGroup;
  submitted = false;
  error = '';
  message: string;
  validators = {
    minLength: 6
  }

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(this.validators.minLength)]],
      confirmPassword: ['', Validators.required]
    },
      {validator: MustMatch('password', 'confirmPassword')});

    this.registerForm.valueChanges.subscribe(next => {
      //console.log('valueChanges', next, this.submitted, this.registerForm)
      this.error = '';
    })

    this.registerForm.statusChanges.subscribe(next => {
      //console.log('statusChanges', next, this.submitted, this.registerForm)
      this.message = '';
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    //console.log('form', this.registerForm);
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService
      .register(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.formDirective.resetForm();
          this.error = '';
          this.message = 'The user ' + data.username + ' was registered successfully';
        },
        error => {
          this.error = error;
          console.error(error);
        }
      );
  }

}
