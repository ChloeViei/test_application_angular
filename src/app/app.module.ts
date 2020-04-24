import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ApiModule } from './swagger';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListBurgerComponent } from './Burger/list-burger/list-burger.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
