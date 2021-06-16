import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule
  ],
  exports: [RouterModule]
})
export class MainModule { }
