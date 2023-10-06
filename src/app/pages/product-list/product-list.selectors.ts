import { createSelector } from '@ngrx/store';
import {
  ProductDto,
  ProductListResopnseType,
  ProductPageResponseType,
} from 'src/app/common/common.types';
import { AppState } from 'src/app/store';

export const selectProductById = (id: number) =>
  createSelector(
    (state: AppState) => state.productListReducer.products,
    (products: ProductDto[]) => products.find((product) => product.id === id)
  );

// select the product with highest price
export const selectProductWithHighestPrice = createSelector(
  (state: AppState) => state.productListReducer.products,
  (products: ProductDto[]) =>
    products.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    )
);

// select the product with lowest price
export const selectProductWithLowestPrice = createSelector(
  (state: AppState) => state.productListReducer.products,
  (products: ProductDto[]) =>
    products.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    )
);

export const selectProductDataById = (id: number) =>
  createSelector(
    (state: AppState) => state.productListReducer,
    (productListReducer: ProductListResopnseType) => {
      const productData: ProductPageResponseType = {
        categories: productListReducer.categories,
        product: productListReducer.products.find(
          (product) => product.id === id
        ),
      };

      return productData;
    }
  );
