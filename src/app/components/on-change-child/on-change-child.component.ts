import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-on-change-child',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './on-change-child.component.html',
  styleUrls: ['./on-change-child.component.css'],
})
export class OnChangeChildComponent implements OnChanges {
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() searchString = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
  
    if (changes['content']) {
      console.log(changes['content'].currentValue);
    }
    if(changes['title']) {
      console.log(changes['title'].currentValue);
    }
  }
}
