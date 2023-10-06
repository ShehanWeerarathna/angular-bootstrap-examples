import { createAction } from "@ngrx/store";
import { ProductListResopnseType } from "src/app/common/common.types";

const loadProductList = createAction(
    '[ProductList] Load ProductList',
    (searchTerm: string | null) => ({searchTerm})
    );

const loadProductListSuccess = createAction(
    '[ProductList] Load ProductList Success',
    (data: ProductListResopnseType) => ({data})
    );

const loadProductListFailure = createAction(
    '[ProductList] Load ProductList Failure',
    (error: any) => ({error})
    );

export const productListActions = {
    loadProductList,
    loadProductListSuccess,
    loadProductListFailure
};