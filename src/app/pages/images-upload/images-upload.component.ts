import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.css']
})
export class ImagesUploadComponent {
  selectedFiles: File[] = [];

  constructor(private productService: ProductService) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
  uploadImages() {
    if (this.selectedFiles.length === 0) {
      alert('Please select one or more images to upload.');
      return;
    }

    const formData = new FormData();

    for (const file of this.selectedFiles) {
      formData.append('images', file);
    }
    this.productService.uploadImagesAsync(formData).subscribe((result) => {
      console.log(result);
    }
    );
  }

}
