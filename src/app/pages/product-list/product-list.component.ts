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

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProductsAsync().subscribe((data) => {
      this.productListData = data;
      // Now you can work with this.productListData in your template
    }
    );
  }

}
