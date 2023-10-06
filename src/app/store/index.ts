import { ActionReducerMap } from "@ngrx/store";
import { ProductListResopnseType } from "../common/common.types";
import { productListReducer } from "../pages/product-list/product-list.reducer";

export interface AppState {
    productListReducer: ProductListResopnseType;
}

export const reducers: ActionReducerMap<AppState> = {
    productListReducer: productListReducer
};