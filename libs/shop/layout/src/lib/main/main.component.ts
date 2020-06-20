import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ecommerce-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  options = ['Products', 'Admin', 'Logout'];
  opSelected: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.opSelected = this.options[0];
  }

  setOption(ev) {
    this.opSelected = ev;
    //this.router.navigateByUrl('/home/'+ ev.toLowerCase())
  }

}
