import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../../swagger';

@Component({
  selector: 'app-list-burger',
  templateUrl: './list-burger.component.html',
  styleUrls: ['./list-burger.component.css']
})
export class ListBurgerComponent implements OnInit {

  burgers;

  constructor(private burgersService: BurgersService) {}

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgers = this.burgersService.listBurgers()
      .subscribe(burgers => this.burgers = burgers);
  }

}
