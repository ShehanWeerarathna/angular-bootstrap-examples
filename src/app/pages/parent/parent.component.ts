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
  
    onChangeSearch(text:string){
      console.log(text);

    }

    searchResults: string[] = [];

    onSearch(searchTerm: string) {
      console.log('Search term:', searchTerm );
      // Perform search logic (e.g., call a service to get search results)
      // For the sake of the example, let's assume searchResults is an array of strings.
      this.searchResults = this.getSearchResults(searchTerm);
      console.log(this.searchResults);

    }
  
    getSearchResults(searchTerm: string): string[] {
      // Implement your search logic here (e.g., call a service)
      // For the sake of the example, just return dummy results.
      return ['Result 1', 'Result 2', 'Result 3'];
    }
}
