import {Component, Input, OnInit} from '@angular/core';
import {BurgersService} from '../../swagger';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-burger',
  templateUrl: './show-burger.component.html',
  styleUrls: ['./show-burger.component.css']
})
export class ShowBurgerComponent implements OnInit {

  burger;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private burgersService: BurgersService
  ) { }

  ngOnInit(): void {
    this.getBurger();
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burger = this.burgersService.burgerDetail(id)
      .subscribe(burger => this.burger = burger);
  }

}
