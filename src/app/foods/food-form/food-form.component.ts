import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Foods } from '../../shared/interfaces/foods';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
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
      caloriesNumber: ['', [Validators.pattern('^[0-9]*$')]],
      foodImage: ['', [Validators.pattern('^https?:\\/\\/.+\\..+$')]],
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
