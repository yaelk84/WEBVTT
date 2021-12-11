import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReviewsComponent } from './components/reviews/reviews.component';





@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    ReviewsComponent
  ]
})
export class ShareModule { }
