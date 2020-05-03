import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../../swagger';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-list-burger',
  templateUrl: './list-burger.component.html',
  styleUrls: ['./list-burger.component.css']
})

export class ListBurgerComponent implements OnInit {

  tile: Tile[] = [
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
  ];

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
