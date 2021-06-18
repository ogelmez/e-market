/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainComponent } from './main.component';
import { MainModule } from '../main.module';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from '../main-routing.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ProductsModule } from '../products/products.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/app.reducer';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports : [   RouterModule,
        MainRoutingModule,
        ShoppingCartModule,
        ProductsModule,StoreModule.forRoot(reducers)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
