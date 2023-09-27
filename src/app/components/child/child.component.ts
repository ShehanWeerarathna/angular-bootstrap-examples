import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childText: string = '';
  @Output() childTextChange = new EventEmitter<string>();
  onTextChange(event: any) {
    this.childTextChange.emit(event);
  }
  onTextChange2() {
    this.childTextChange.emit(this.childText);
  }



}
