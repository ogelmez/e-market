import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';

@NgModule({
  declarations: [HeaderComponent, PriceFormatterPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PriceFormatterPipe
  ]
})
export class CoreModule { }
