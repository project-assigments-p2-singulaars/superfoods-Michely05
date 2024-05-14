import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodService } from '../services/food.service';
import { FoodFilterPipe } from '../pipes/food-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodFilterPipe, FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  foods!: Foods[];
  @Input() searchText!: string;
  @Output() sentFoodToMenu = new EventEmitter<Foods>();

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAllFoods();
  }

  addToMenu(food: Foods) {
    this.sentFoodToMenu.emit(food);
  }
}
