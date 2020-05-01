import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBurgerComponent} from './Burger/list-burger/list-burger.component';
import {ShowBurgerComponent} from './Burger/show-burger/show-burger.component';


const routes: Routes = [
  {path: '', component: ListBurgerComponent},
  { path: 'burger/:id', component: ShowBurgerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
