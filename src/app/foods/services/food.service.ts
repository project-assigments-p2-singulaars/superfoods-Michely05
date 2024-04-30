import { Injectable } from '@angular/core';
import foods from '../../../../foods';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getAllFoods() {
    return foods;
  }
}
