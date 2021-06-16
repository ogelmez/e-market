import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    ShoppingCartModule,
    ProductsModule
  ],
  exports: [RouterModule]
})
export class MainModule { }
