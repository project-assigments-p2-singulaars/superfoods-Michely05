import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchText!: string;
  @Output('searchResult') formSent = new EventEmitter();

  getInputValue() {
    const value = this.searchText;
    this.formSent.emit(value);
  }
}
