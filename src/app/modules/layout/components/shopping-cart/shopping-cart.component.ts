import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/interfaces/product';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { priceFormatedToReal } from 'src/app/tools/formattedPriceReal';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  productsList: IProduct[] = [] as IProduct[];

  faShoppingCart = faShoppingCart;
  faPlus = faPlus;
  faMinus = faMinus;

  showToggleCart = false;

  constructor(private shoppingCartService: ShoppingCartService) {
    library.add(faShoppingCart);
    library.add(faPlus);
    library.add(faMinus);
  }

  ngOnInit(): void {
    this.productsList = this.shoppingCartService.getProductsFromTheCart();
  }

  toggleCart() {
    this.showToggleCart = !this.showToggleCart;
  }

  formattedProductPrice(product: number) {
    return priceFormatedToReal(product);
  }

  getTotalProducts() {
    return this.productsList.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  }

  getTotalPrice() {
    return this.productsList.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  }

  getTotalPriceFormatted() {
    return priceFormatedToReal(this.getTotalPrice());
  }

  quantityOfProductInCart(product: IProduct) {
    return this.shoppingCartService.quantityOfProduct(product);
  }

  increaseProductQuantityInCart(product: IProduct) {
    this.shoppingCartService.increaseProductQuantity(product);
  }

  decreaseAmountOfProduct(product: IProduct) {
    this.shoppingCartService.decreaseAmountOfProduct(product);
  }

  removeProductFromCart(product: IProduct) {
    this.shoppingCartService.removeProduct(product);
  }

  onCheckout() {
    return alert('Compra efetuada com sucesso!');
  }
}
