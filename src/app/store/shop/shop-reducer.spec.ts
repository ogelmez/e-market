import * as fromReducer from './shop.reducer';
import * as fromActions from '../shop/shop.action';
import { Product } from 'src/app/core/models/Product';
import { State } from './shop.reducer';
import { foods } from 'src/app/core/data/foods';

describe('ProductsReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const initialState: State = {
                products: foods,
                cart: []
            };
            const action = {} as any;
            const state = fromReducer.shoppingListReducer(undefined, action);

            expect(state).toEqual(initialState);
        });
    });



    describe('Add Product action', () => {
        it('should add the new product to the product array', () => {
            const newProduct: Product =
            {
                title: 'Muz Yerli',
                category: 'meyve',
                image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27270000/muz-yerli-kg-9d3d01.jpg',
                price: 14.95,
                id: 13,
                description: 'Kg üzerinden satışı yapılmaktadır.'
            }
            const entities = foods
            const initialState: State = {
                products: foods,
                cart: []
            };
            const previousState = { ...initialState, entities };
            const action = new fromActions.AddProductToCart(newProduct);
            const state = fromReducer.shoppingListReducer(previousState, action);

             expect(Object.keys(state.products).length).toEqual(13);
        });
    });
});