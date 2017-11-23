import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DoorBodyComponent } from './door-body/door-body.component';

import { DoorServiceService } from './door-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoorBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DoorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
