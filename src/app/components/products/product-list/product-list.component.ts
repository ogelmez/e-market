import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  shop: { products: Product[], cart: Product[] };
  products: Product[];


  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select(state => {
      return state;
    }).subscribe(state => {
      this.products = state.shop.products;
    });
  }

}
