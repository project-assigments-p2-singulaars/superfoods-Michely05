import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, SearchBarComponent],
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
}
