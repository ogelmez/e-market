import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Product } from 'src/app/core/models/Product';
import { AddProductToCart } from 'src/app/store/shop/shop.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;

  constructor() {
  }

  ngOnInit() { }



}
