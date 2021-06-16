import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  totalPrice: number;
  cart: Product[];

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('shop').subscribe(shop => {
      this.totalPrice = shop.cart.reduce((count, curItem) => {
        return count + (curItem.quantity * curItem.price);
      }, 0);

      this.cart = shop.cart;

    });
  }

}
