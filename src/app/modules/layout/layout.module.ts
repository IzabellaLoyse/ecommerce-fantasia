import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from 'src/app/modules/layout/components/layout/layout.component';
import { HeaderComponent } from 'src/app/modules/layout/components/header/header.component';
import { ShoppingCartComponent } from 'src/app/modules/layout/components/shopping-cart/shopping-cart.component';
import { FooterComponent } from 'src/app/modules/layout/components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ShoppingCartComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class LayoutModule {}
