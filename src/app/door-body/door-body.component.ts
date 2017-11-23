import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DoorServiceService } from './../door-service.service';

@Component({
  selector: 'app-door-body',
  templateUrl: './door-body.component.html',
  styleUrls: ['./door-body.component.css']
})
export class DoorBodyComponent implements OnInit {

  constructor(private _doorService: DoorServiceService) { }

  ngOnInit() {
  	this._doorService.getDoor().map(
  			(data: Response) => console.log(data);
  		);
  }

}
