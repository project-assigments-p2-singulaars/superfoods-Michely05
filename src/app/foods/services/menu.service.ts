import { Injectable, signal } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu = signal<Foods[]>([]);

  addToMenu(food: Foods) {
    this.menu.update((currentMenu) => {
      const existingFood = currentMenu.find((item) => item.name === food.name);

      if (existingFood) {
        existingFood.quantity = (existingFood.quantity || 1) + 1;
        return [...currentMenu];
      } else {
        return [{ ...food, quantity: 1 }, ...currentMenu];
      }
    });
  }
  get totalCalories() {
    return this.menu().reduce(
      (total, food) => total + food.calories * (food.quantity || 1),
      0
    );
  }
}
