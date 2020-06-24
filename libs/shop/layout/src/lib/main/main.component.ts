import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@ecommerce/shared/security';

@Component({
  selector: 'ecommerce-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  options = ['Products'];
  optionsSignIn = ['Admin', 'Logout'];
  optionsSignOut = ['Login'];
  opSelected: string;

  constructor(private router: Router, private authService: AuthenticationService) {
    //this.buildOptions();
    //this.router.initialNavigation();
    this.authService.currentUser.subscribe(next=> {
      /*if(next) */this.buildOptions();
    })
  }

  ngOnInit(): void {
    //this.opSelected = this.options[0];
  }

  setOption(ev) {
    this.opSelected = ev;
    if(ev === 'Logout') this.authService.logout();
    //this.router.navigateByUrl('/home/'+ ev.toLowerCase())
  }

  private buildOptions() {
    this.options.splice(0);
    if(this.authService.currentUserValue){
      this.options.push('Products',...this.optionsSignIn);
    } else {
      this.options.push('Products',...this.optionsSignOut);
    }
  }
}
