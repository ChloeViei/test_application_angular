import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ApiModule } from './swagger';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListBurgerComponent } from './Burger/list-burger/list-burger.component';
import { ShowBurgerComponent } from './Burger/show-burger/show-burger.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListBurgerComponent,
    ShowBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,

    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
