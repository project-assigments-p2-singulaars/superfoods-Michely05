import { Injectable } from '@angular/core';
import foods from '../../../../foods';
import { Foods } from '../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods!: Foods[];

  constructor() {
    this.foods = foods;
  }

  getAllFoods() {
    return foods;
  }

  addNewFood(food: Foods) {
    foods.unshift(food);
  }
}
