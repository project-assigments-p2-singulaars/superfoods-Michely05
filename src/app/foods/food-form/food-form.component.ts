import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Foods } from '../../shared/interfaces/foods';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss',
})
export class FoodFormComponent {
  // foodFormService = inject(this.foodFormService)

  @Output() formSent = new EventEmitter();

  foodForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private fb: FormBuilder) {
    this.foodForm = this.fb.group({
      foodName: ['', [Validators.required]],
      caloriesNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      foodImage: [
        '',
        [Validators.required, Validators.pattern('^https?:\\/\\/.+\\..+$')],
      ],
    });
  }
  get foodFormControl() {
    return this.foodForm.controls;
  }

  toggle() {
    this.hide = !this.hide;
  }

  onSubmit() {
    console.log(this.foodForm);
    this.submitted = true;
    if (this.foodForm.valid) {
      alert('Food added!');

      console.log(this.foodForm.value.foodName);
      console.log(this.foodForm.value.caloriesNumber);
      console.log(this.foodForm.value.foodImage);
      const food: Foods = {
        id: 999,
        name: this.foodForm.value.foodName,
        calories: this.foodForm.value.caloriesNumber,
        image: this.foodForm.value.foodImage,
        quantity: 1,
      };

      this.formSent.emit(food);

      this.submitted = false;
      this.foodForm.reset();
      this.hide = true;
    } else {
      alert('Something went wrong...');
    }
  }
}
