import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductDto, ProductListResopnseType } from 'src/app/common/common.types';
import { ProductService } from 'src/app/services/product.service';
import { productListActions } from './product-list.actions';
import { selectProductById } from './product-list.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  productListData: ProductListResopnseType = {} as ProductListResopnseType;
  searchTerm: string = "";
  constructor(private productService: ProductService,private store: Store<{ productListReducer: ProductListResopnseType }>) { }
  productList$ = this.store.pipe(select((state) => state.productListReducer));
  selectedProduct: ProductDto | undefined;
  productSubscription?: Subscription ;

  ngOnInit(): void {
    // this.productService.getProductsAsync(null).subscribe((data) => {
    //   this.productListData = data;
    //   this.store.dispatch(productListActions.loadProductListSuccess(data));
    // }
    // );
     // Dispatch an action to load products (you can pass a searchTerm if needed)
     this.store.dispatch(productListActions.loadProductList(null));
      // Subscribe to the productList$ observable to get the latest data
     this.productList$.subscribe((data) => {
        this.productListData = data;
      });

  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

  onSearch() {
    this.productService.getProductsAsync(this.searchTerm).subscribe((data) => {
      this.productListData = data;
    }
    );
  }
  onProductSearch(searchTerm:string) {
    // this.productService.getProductsAsync(searchTerm).subscribe((data) => {
    //   this.productListData = data;
    // }
    // );
    this.store.dispatch(productListActions.loadProductList(searchTerm));
  }
  
  

  onSelectProduct(id: number) {
    this.productSubscription = this.store.select(selectProductById(id)).subscribe((product) => {
      this.selectedProduct = product;
    });
  }
  
}
