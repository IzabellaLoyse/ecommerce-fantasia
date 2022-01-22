import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';

import { ProductsStoreService } from 'src/app/services/products-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: IProduct | undefined;

  constructor(
    private productsStore: ProductsStoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const idValue = Number(id);

    this.productsStore.getProduct(idValue).subscribe((product) => {
      this.product = product;
    });
  }
}
