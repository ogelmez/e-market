/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { reducers } from 'src/app/store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from '../product/product.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      imports: [StoreModule.forRoot(reducers), CoreModule,MatCardModule,
        MatButtonModule,]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create product-list', () => {
    expect(component).toBeTruthy();
  });
});
