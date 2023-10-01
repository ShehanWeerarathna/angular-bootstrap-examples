import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto, ProductPageResponseType } from 'src/app/common/common.types';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFormType } from './product.component.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productIdParam: string | null = '';
  isNewProduct: boolean = false;
  productData: ProductPageResponseType = {} as ProductPageResponseType;
  isEditable: boolean = false



  initialData: ProductFormType = {
    name: '',
    price: null,
    categoryId: null,
  };

  productForm = new FormGroup({
    name: new FormControl(this.initialData.name, [Validators.required]),
    price: new FormControl(this.initialData.price, [Validators.required, Validators.min(1)]),
    categoryId: new FormControl(this.initialData.categoryId, [Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }
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
            if (this.productData.product !== null) {
              this.productForm.setValue({
                name: this.productData.product?.name ?? '',
                price: this.productData.product?.price ?? 0,
                categoryId: this.productData.product?.categoryId ?? 0,
              });
              this.productForm.disable();
              this.isEditable = false;

            }
          });
      } else {
        this.productService.getProductByIdAsync(0).subscribe((data) => {
          this.productData = data;
          if (this.productData.product !== null) {
            this.productForm.setValue({
              name: this.productData.product?.name ?? '',
              price: null,
              categoryId: null,
            });
             this.productForm.enable();
            // this.productForm.markAsUntouched();
            this.isEditable = true;
          }
        });
      }
    });
  }

  editForm() {
    this.productForm.enable();
    this.isEditable = true;
  }
  submitForm() {
    this.productForm.markAllAsTouched();
    if (this.productForm.invalid) {
      return;
    }
    console.log(this.productForm.value)
    const formProduct: ProductDto = {
      id: this.productData.product?.id!,
      name: this.productForm.value.name!,
      price: this.productForm.value.price!,
      categoryId: this.productForm.value.categoryId!
    }
    this.saveProduct(formProduct);
  }
  async deleteProduct() {
    if (this.productData.product?.id && this.productData.product?.id > 0) {
      const confirmed: boolean = await confirm("do you want to delete this product? ")
      if (confirmed) {
        this.productService.deleteProductAsync(this.productData.product?.id).subscribe((data) => {
          this.router.navigateByUrl("/products")
        });
      }

    }
  }
  saveProduct(product: ProductDto) {
    if (this.productData.product?.id && this.productData.product?.id > 0) {
      this.productService.updateProductAsync(product).subscribe((data) => {
        this.productData = data;
        if (this.productData.product !== null) {
          this.productForm.setValue({
            name: this.productData.product?.name ?? '',
            price: this.productData.product?.price ?? 0,
            categoryId: this.productData.product?.categoryId ?? 0,
          });
          this.productForm.disable();
          this.isEditable = false;

        }
      });
    } else {
      this.productService.createProductAsync(product).subscribe((data) => {
        this.productData = data;
        if (this.productData.product !== null) {
          this.productForm.setValue({
            name: this.productData.product?.name ?? '',
            price: this.productData.product?.price ?? 0,
            categoryId: this.productData.product?.categoryId ?? 0,
          });
          this.productForm.disable();
          this.isEditable = false;

        }
      });
    }


  }
}
