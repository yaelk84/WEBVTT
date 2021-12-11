import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ireview} from "../../../../../model/models";



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() review: Ireview;
   @Input() isNew = false;
  @Output() deleteReview = new EventEmitter();
  @Output() changeReviewCb: EventEmitter<Ireview> = new EventEmitter();
  isEdit = false;
    constructor() { }

  ngOnInit(): void {

    if(this.isNew){
      this.isEdit = true;
    }
  }

  delete(){
this.deleteReview.emit();
  }
  edit(){
      this.isEdit = true;
      this.changeReviewCb.emit(this.review)
  }

  changeReview() {
      if( this.review.text && this.review.title){
        if(!this.isNew){
          this.isEdit = false;
        }

        this.changeReviewCb.emit(this.review)

      }

  }
}
