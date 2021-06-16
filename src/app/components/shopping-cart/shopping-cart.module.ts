import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';

@NgModule({
    declarations: [ShoppingCartListComponent, ShoppingCartItemComponent],
    imports: [
        CommonModule
    ],
    exports: [ShoppingCartListComponent, ShoppingCartItemComponent]
})
export class ShoppingCartModule { }
