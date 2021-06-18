/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShoppingCartListComponent } from './shopping-cart-list.component';
import { reducers } from 'src/app/store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';

describe('ShoppingCartListComponent', () => {
  let component: ShoppingCartListComponent;
  let fixture: ComponentFixture<ShoppingCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartListComponent ],
      imports : [StoreModule.forRoot(reducers),CoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create shopping-cart-list', () => {
    expect(component).toBeTruthy();
  });
});
