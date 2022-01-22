import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from 'src/app/modules/products/components/product/product.component';
import { ShopComponent } from 'src/app/modules/products/components/shop/shop.component';
import { LayoutComponent } from 'src/app/modules/layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ShopComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
