import { Injectable, signal } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu = signal<Foods[]>([]);

  addToMenu(food: Foods) {
    this.menu.update((v) => [food].concat(v));
  }
}
