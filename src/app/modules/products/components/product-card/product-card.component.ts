import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { priceFormatedToReal } from 'src/app/tools/formattedPriceReal';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct = {} as IProduct;

  selectedProduct: IProduct[] = [] as IProduct[];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  addProduct() {
    this.shoppingCartService.addProductToCart(this.product);
  }

  formattedProductPrice() {
    return priceFormatedToReal(this.product.price);
  }
}
