import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	invoice = {
		doorType:{"price":0},
  		lookType:{"price":0},
  		design:{"price":0},
  		infills:{"price":0},
  		accessories:{"price":0}
	};

	invoiceEventListener(data:any){
		this.invoice = data.value;
	}	
}
