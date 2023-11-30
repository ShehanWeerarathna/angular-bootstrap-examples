import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}
