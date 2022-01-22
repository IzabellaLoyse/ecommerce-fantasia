import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

import { ProductsStoreService } from 'src/app/services/products-store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  productsList: IProduct[] = [] as IProduct[];

  constructor(private productsStore: ProductsStoreService) {}

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.productsStore.getProducts().subscribe((product) => {
      this.productsList = product;
    });
  }
}
