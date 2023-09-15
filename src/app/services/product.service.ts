import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ProductListResopnseType,
  ProductDto,
  ProductPageResponseType,
} from '../common/common.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5118/api';

  constructor(private http: HttpClient) {}
  // Example GET request
  getProductsAsync(): Observable<ProductListResopnseType> {
    return this.http.get<ProductListResopnseType>(
      `${this.apiUrl}/Product/GetProducts`
    );
  }

  // Example POST request
  createProductAsync(product: ProductDto): Observable<ProductPageResponseType> {
    return this.http.post<ProductPageResponseType>(
      `${this.apiUrl}/Product/CreateProduct`,
      product
    );
  }

  // Example PUT request
  updateProductAsync(product: ProductDto): Observable<ProductPageResponseType> {
    return this.http.put<ProductPageResponseType>(
      `${this.apiUrl}/Product/UpdateProduct`,
      product
    );
  }

  // Example DELETE request
  deleteProductAsync(productId: number): Observable<ProductPageResponseType> {
    return this.http.delete<ProductPageResponseType>(
      `${this.apiUrl}/Product/DeleteProduct/${productId}`
    );
  }

  // Get product by id
  getProductByIdAsync(id: number): Observable<ProductPageResponseType> {
    return this.http.get<ProductPageResponseType>(
      `${this.apiUrl}/Product/GetProductById/${id}`
    );
  }
}
