import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductsModule { }
