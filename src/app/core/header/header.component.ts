import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  env = environment;
  shop: Observable<any>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shop = this.store.select('shop');
  }

}
