import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {ShareModule} from "../../share/share.module";
import {VirtualScrollerModule} from "ngx-virtual-scroller";



@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    VirtualScrollerModule
  ]
})
export class HomeModule { }
