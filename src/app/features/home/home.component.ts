import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/api.service";
import {forkJoin, Subscription, timer} from "rxjs";
import {DataService} from "../../core/data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private d = new Date(); // for now
render = false;
processCounter;
value: number;
  countDown:Subscription;
  counter = 0;
  tick = 1;
  constructor(private server:ApiService, private  dataService: DataService) { }
data= [];
  ngOnInit(): void {

  forkJoin([this.server.getBridgeTx(), this.server.getCharacters()]).subscribe(results => {

    console.log("res",results[0])
   this.data = this.dataService.data(results[1],results[0])

    this.render = true;
  });



      this.countDown = timer(0, this.tick)
        .subscribe(() => {
          requestAnimationFrame(() => {
            ++this.counter;
          });



        })




  }

  transform(start:number, end:number) {

     if(this.counter > end){
       return '100%';

     }
      const range = end - start;
      const currCalc = this.counter - start
      if(currCalc < 0){
        return  '0'
      }
      const precent = currCalc / range * 100;
            return  precent.toFixed(2) + '%'



  }


}
