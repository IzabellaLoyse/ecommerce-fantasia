import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IProduct } from '../interfaces/product';

import { productList } from '../__mocks__/products-list';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  productsStore: Subject<IProduct> = new Subject();

  constructor() {}

  getProducts(): Observable<IProduct[]> {
    const products = of(productList);
    return products;
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    const product = of(productList.find((product) => product.id === id));
    return product;
  }
}
