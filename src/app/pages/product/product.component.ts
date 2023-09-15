import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPageResponseType } from 'src/app/common/common.types';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EnumProductPageMode } from 'src/app/common/common.enums';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productIdParam: string | null = '';
  isNewProduct: boolean = false;
  productData: ProductPageResponseType = {} as ProductPageResponseType;
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   gender: new FormControl(''),
  //   employmentStatus: new FormControl(''),
  //   subscribeToNewsletter: new FormControl(false),
  // });
  pageMode: EnumProductPageMode = EnumProductPageMode.Create;

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    categoryId: new FormControl(0),
  });
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productIdParam = params.get('id');
      this.isNewProduct = this.productIdParam === 'new';

      if (!this.isNewProduct) {
        // Fetch product data using the ProductService
        this.productService
          .getProductByIdAsync(
            this.productIdParam !== null ? parseInt(this.productIdParam) : 0
          )
          .subscribe((data) => {
            this.productData = data;
            console.log(this.productData);
            if(this.productData.product !== null ){
              this.productForm.setValue({
                name: this.productData.product?.name ?? '',
                price: this.productData.product?.price ?? 0,
                categoryId: this.productData.product?.categoryId ?? 0,
              });
            }
            //this.setFormValues();
            // Now you can work with this.productData in your template
          });
      } else {
        this.productService.getProductByIdAsync(0).subscribe((data) => {
          this.productData = data;
          console.log(this.productData);
          if(this.productData.product !== null ){
              this.productForm.setValue({
                name: this.productData.product?.name ?? '',
                price: this.productData.product?.price ?? 0,
                categoryId: this.productData.product?.categoryId ?? 0,
              });
          }
          // Now you can work with this.productData in your template
        });
      }
    });
  }
}
