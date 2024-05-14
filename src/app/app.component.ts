import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FoodFormComponent } from './foods/food-form/food-form.component';
import { Foods } from './shared/interfaces/foods';
import { FoodService } from './foods/services/food.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FoodListComponent,
    SearchBarComponent,
    FoodFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'superfoods';
  searchText!: string;

  setSearchText(value: string) {
    console.log(value);
    console.log(typeof value);
    this.searchText = value;
  }

  constructor(private foodService: FoodService) {}
  showNewFood(food: Foods) {
    console.log(food);
    this.foodService.addNewFood(food);
  }
}
