import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@ecommerce/shared/security';

@Component({
  selector: 'ecommerce-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  options = [];
  optionsPublic = ['Products', 'Cart'];
  optionsSignIn = ['Admin', 'Logout'];
  optionsSignOut = ['Login'];
  opSelected: string;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(next=> {
      this.buildOptions();
    })
  }

  ngOnInit(): void {
  }

  setOption(ev) {
    this.opSelected = ev;
    if(ev === 'Logout') this.authService.logout();
  }

  private buildOptions() {
    this.options.splice(0);
    if(this.authService.currentUserValue){
      this.options.push(...this.optionsPublic,...this.optionsSignIn);
    } else {
      this.options.push(...this.optionsPublic,...this.optionsSignOut);
    }
  }
}
