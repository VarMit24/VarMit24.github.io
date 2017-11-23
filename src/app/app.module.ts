import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [DoorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
