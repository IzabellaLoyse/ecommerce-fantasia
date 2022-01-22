import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from 'src/app/modules/products/components/product-card/product-card.component';
import { ShopComponent } from 'src/app/modules/products/components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ProductCardComponent, ShopComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, LayoutModule],
})
export class ProductsModule {}
