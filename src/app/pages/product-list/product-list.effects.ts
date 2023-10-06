import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { productListActions } from "./product-list.actions";
import {  of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productListActions.loadProductList),
      switchMap((action) =>
        this.productService.getProductsAsync(action.searchTerm).pipe(
          map((data) =>
            productListActions.loadProductListSuccess(data )
          ),
          catchError((error) =>
            of(productListActions.loadProductListFailure({ error }))
          )
        )
      )
    )
  );
}