
export interface ProductDto {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  category?: CategoryDto;
}

export interface CategoryDto {
  id: number;
  name: string;
  products: null[];
}

export interface SelectDto {
  value: number;
  label: string;
}
export interface ProductListResopnseType {
  products: ProductDto[];
  categories: SelectDto[];
}
export interface ProductPageResponseType {
  categories: SelectDto[];
  product?: ProductDto;
}
