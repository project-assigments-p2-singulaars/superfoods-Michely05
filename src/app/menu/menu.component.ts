import { Component, computed, inject } from '@angular/core';
import { MenuService } from '../foods/services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  private menuService = inject(MenuService);
  menu = this.menuService.menu;

  totalCalories = computed(() =>
    this.menu().reduce((a, b) => (a += b.calories), 0)
  );
}
