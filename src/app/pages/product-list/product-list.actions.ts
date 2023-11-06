import { createAction } from '@ngrx/store';
import { ProductListResopnseType, ProductPageResponseType } from 'src/app/common/common.types';

const loadProductList = createAction(
  '[ProductList] Load ProductList',
  (searchTerm: string | null) => ({ searchTerm })
);

const loadProductListSuccess = createAction(
  '[ProductList] Load ProductList Success',
  (data: ProductListResopnseType) => ({ data })
);

const loadProductListFailure = createAction(
  '[ProductList] Load ProductList Failure',
  (error: any) => ({ error })
);

const loadProductById = createAction(
  '[ProductList] Load Product By Id',
  (id: number) => ({ id })
);

const loadProductByIdSuccess = createAction(
  '[ProductList] Load Product By Id Success',
  (data:ProductPageResponseType ) => ({ data })
);

const loadProductByIdFailure = createAction(
  '[ProductList] Load Product By Id Failure',
  (error: any) => ({ error })
);

export const productListActions = {
  loadProductList,
  loadProductListSuccess,
  loadProductListFailure,
  loadProductById,
  loadProductByIdSuccess,
  loadProductByIdFailure,
};
