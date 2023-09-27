import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  sharedText: string = '';

  // two way binding section-old start
  updateSharedText(newText: string) {
    this.sharedText = newText;
  }
  // two way binding section end
  
    // ngonchanges section start
    parentProperty: string = 'Initial Value';

    onParentPropertyChange() {
      console.log('Parent property changed:', this.parentProperty);
    }
  
    onChildPropertyChanged(newValue: string) {
      console.log('Child property changed in parent:', newValue);
    }
    // ngonchanges section end

    content: string = 'Initial Content';
    title: string = 'Initial Title';
  

}
