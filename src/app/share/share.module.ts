import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ScrollerComponent } from './scroller/scroller.component';
import { CalcHeightPipe } from './pipes/calc-height.pipe';



@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    ScrollerComponent,
    CalcHeightPipe
  ],
  declarations: [ScrollerComponent, CalcHeightPipe]
})
export class ShareModule { }
