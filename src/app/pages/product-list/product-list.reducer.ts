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
  on(productListActions.loadProductListSuccess, (state, action) => {
    return {
      ...state,
      ...action.data,
    };
  })
);
