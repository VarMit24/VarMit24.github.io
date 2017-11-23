import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';

import { DoorServiceService } from './../door-service.service';

@Component({
  selector: 'app-door-body',
  templateUrl: './door-body.component.html',
  styleUrls: ['./door-body.component.css']
})
export class DoorBodyComponent implements OnInit {

  constructor(private _doorService: DoorServiceService) { }

  @Output() invoiceEventEmitter = new EventEmitter<any>();
  door:any;
  invoice ={
  	doorType:{"price":0},
  		lookType:{"price":0},
  		design:{"price":0},
  		infills:{"price":0},
  		accessories:{"price":0}
  };
  designSelectedIndex = -1;
  colouredSelectedIndex = -1;
  woodSelectedIndex = -1;
  doorTypeSelected = -1;
  
  ngOnInit() {
  	this.door = this._doorService.getDoor();
  }

  doorType(data: any){
  	this.doorTypeSelected = data.name;
  	this.invoice.doorType = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

  selectedWood(data:any, index:any){
  	this.woodSelectedIndex = index;
  	this.invoice.lookType = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

  selectedColoured(data:any, index:any){
  	this.colouredSelectedIndex = index;
  	this.invoice.lookType = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

  selectedDesign(data:any, index:any){
  	this.designSelectedIndex = index;
  	this.invoice.design = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

  selectedInfill(data:any){
  	this.invoice.infills = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

  selectedAccessories(data:any){
  	this.invoice.accessories = data;
  	this.invoiceEventEmitter.emit({'value':this.invoice});
  }

}
