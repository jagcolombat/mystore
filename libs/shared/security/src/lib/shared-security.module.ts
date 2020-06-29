import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@ecommerce/shared/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: SecurityComponent, children: [
          {path: '', component: LoginComponent},
          {path: 'register', component: RegisterComponent}
        ]}
    ])],
  declarations: [LoginComponent, RegisterComponent, SecurityComponent],
})
export class SharedSecurityModule {}
