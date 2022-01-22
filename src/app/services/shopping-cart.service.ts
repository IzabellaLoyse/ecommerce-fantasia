import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

import { StorageService } from './storage.service';

const shoppingCartKey = 'key_product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCart: IProduct[] = [] as IProduct[];

  constructor(private storageService: StorageService) {
    this.shoppingCart =
      this.storageService.getDataProduct(shoppingCartKey) || [];
  }

  saveShoppingCart() {
    this.storageService.setDataProduct(shoppingCartKey, this.shoppingCart);
  }

  addProductToCart(product: IProduct) {
    const index = this.shoppingCart.indexOf(product);

    if (index === -1) {
      this.shoppingCart.push(product);
      this.increaseProductQuantity(product);
    } else {
      this.increaseProductQuantity(product);
    }

    this.saveShoppingCart();
  }

  getProductsFromTheCart() {
    return this.shoppingCart;
  }

  quantityOfProduct(product: IProduct) {
    const index = this.shoppingCart.indexOf(product);
    return this.shoppingCart[index].quantity;
  }

  increaseProductQuantity(product: IProduct) {
    const indexItem = this.shoppingCart.indexOf(product);
    this.shoppingCart[indexItem].quantity++;

    this.saveShoppingCart();
  }

  decreaseAmountOfProduct(product: IProduct) {
    const indexItem = this.shoppingCart.indexOf(product);
    this.shoppingCart[indexItem].quantity--;

    if (
      this.shoppingCart[indexItem].quantity === 0 ||
      this.shoppingCart[indexItem].quantity < 0
    ) {
      this.removeProduct(product);
    }

    this.saveShoppingCart();
  }

  removeProduct(product: IProduct) {
    const indexItem = this.shoppingCart.indexOf(product);
    this.shoppingCart.splice(indexItem, 1);
    product.quantity = 0;

    this.saveShoppingCart();
  }
}
