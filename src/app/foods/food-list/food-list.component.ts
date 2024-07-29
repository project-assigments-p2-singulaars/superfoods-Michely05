import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Foods } from '../../shared/interfaces/foods';
import { FoodService } from '../services/food.service';
import { FoodFilterPipe } from '../pipes/food-filter.pipe';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    FoodFilterPipe,
    FormsModule,
    MatCardModule,
    CommonModule,
    NgFor,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  foods!: Foods[];
  @Input() searchText!: string;
  @Output() sentFoodToMenu = new EventEmitter<Foods>();

  constructor(
    private foodService: FoodService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAllFoods();
  }

  addToMenu(food: Foods) {
    this.menuService.addToMenu(food);
  }
}
