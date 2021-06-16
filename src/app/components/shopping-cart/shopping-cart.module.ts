import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [ShoppingCartListComponent, ShoppingCartItemComponent],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [ShoppingCartListComponent, ShoppingCartItemComponent]
})
export class ShoppingCartModule { }
