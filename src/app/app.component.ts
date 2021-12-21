import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ireview} from "../../model/models";
import {CONSTANTS} from "./constants";
import {element} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'base';
  reviews: Ireview[];
  reviewToAdd:Ireview ={title:'',text:''};
  loadData = false;
  @ViewChild('myDiv') myDiv: ElementRef;

 counter=0;
  ngOnInit(): void {
    setTimeout(()=>{



    },20)

    this.reviews = this.getReviews();
    this.initReviewToAdd()
    this.loadData = true;

  }

  oncel(){
    this.myDiv.nativeElement.style.color = 'red';
    this.myDiv.nativeElement.style.marginLeft =   '300px';
  }
initReviewToAdd(){
    this.reviewToAdd.title ='';
    this.reviewToAdd.text = '';
}
  add(review: Ireview){
console.log(review)
 const data = this.getReviews();
    data.push(review);
    localStorage.setItem(CONSTANTS.REVIEWS,JSON.stringify(data));
    this.reviews =this.getReviews()
    this.initReviewToAdd();
  }

  getReviews(): Ireview[]{
    const localStorageData =  localStorage.getItem(CONSTANTS.REVIEWS);
    const data = localStorageData?JSON.parse(localStorageData) : [];
    return  data;
  }


  delete(num: number) {
  this.reviews.splice(num,1);
   this.updatelocalStorage();
  }

  updatelocalStorage(){
    localStorage.setItem(CONSTANTS.REVIEWS,JSON.stringify(this.reviews));

}
dd(){
  this.myDiv.nativeElement.style.transform =  'translateX(0)';
  this.myDiv.nativeElement.style.marginLeft =  '0';
}

bb(){

    this.myDiv.nativeElement.style.transform =  'translateX(300px)';

  }
  cc(){


    this.myDiv.nativeElement.style.marginLeft =  '300px';

  }
}
