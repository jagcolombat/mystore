import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ecommerce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() options: string[];
  @Output() evSelOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selOption(op: string){
    this.evSelOption.emit(op);
  }

}
