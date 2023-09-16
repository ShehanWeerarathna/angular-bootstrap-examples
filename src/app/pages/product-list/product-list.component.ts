import { Component, OnInit } from '@angular/core';
import { ProductListResopnseType } from 'src/app/common/common.types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productListData:ProductListResopnseType = {} as ProductListResopnseType;
 searchTerm:string = "";
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProductsAsync(null).subscribe((data) => {
      this.productListData = data;
    }
    );
  }
  onSearch(){
    this.productService.getProductsAsync(this.searchTerm).subscribe((data) => {
console.log(this.searchTerm)
      this.productListData = data;
    }
    );
  }

}
