import { Component, OnInit, inject } from '@angular/core';
import { MenuService } from '../foods/services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private menuService = inject(MenuService);
  menu = this.menuService.menu;

  constructor() {}

  ngOnInit() {
    console.log(this.menu);
  }

  get totalCalories() {
    return this.menuService.totalCalories;
  }
}
