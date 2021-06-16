import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button"
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductsModule { }
