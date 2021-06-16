import { ActionReducerMap } from '@ngrx/store';

import * as fromShop from './shop/shop.reducer';

export interface AppState {
  shop: fromShop.State;
}
export const reducers: ActionReducerMap<AppState> = {
  shop: fromShop.shoppingListReducer
};

