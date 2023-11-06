import { createReducer, on } from '@ngrx/store';
import {
  ProductDto,
  ProductListResopnseType,
  SelectDto,
} from 'src/app/common/common.types';
import { productListActions } from './product-list.actions';

const initialState: ProductListResopnseType = {
  categories: [] as SelectDto[],
  products: [] as ProductDto[],
} as ProductListResopnseType;
export const productListReducer = createReducer(
  initialState,
  // load product list
  on(productListActions.loadProductListSuccess, (state, action) => {
    return {
      ...state,
      ...action.data,
    };
  }),

  // load a product by id
  on(productListActions.loadProductByIdSuccess, (state, action) => {
    const newProduct = action.data.product;
    if (newProduct) {
      const newProducts = state.products.map((product) => {
        if (product.id === newProduct.id) {
          return newProduct;
        }
        return product;
      });
      return {
        ...state,
        products: newProducts,
      };
    }
    return state; // fix for Problem 2
  })

);
