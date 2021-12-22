import {ChangeDetectorRef, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../core/api.service";
import {forkJoin, Subscription, timer} from "rxjs";
import {DataService} from "../../core/data.service";
import {IvvtDisplay} from "../../../../model/models";
import {VirtualScrollerComponent} from "ngx-virtual-scroller";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  render = false;
  countDown:Subscription;
  counter = 0;
  tick = 1;
  data: IvvtDisplay[]= [];
  date: Date;
  @ViewChild('scroll') scroll:VirtualScrollerComponent;

  constructor(private server:ApiService, private  dataService: DataService, private  zone: NgZone, private ref: ChangeDetectorRef) { }


  ngOnInit(): void {

      forkJoin([this.server.getBridgeTx(), this.server.getCharacters()]).subscribe((results) => {
          this.data = this.dataService.getFormattedData(results[1],results[0]);
          this.render = true;
      });

    const date1 = Date.now();

    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {

        this.countDown =timer(0, this.tick).subscribe(()=>{

          const date2 = Date.now();
          const diffTime = Math.abs(+date2 - +date1);
          if (diffTime > 10000){
            this.countDown.unsubscribe()
          }
          this.counter = diffTime;

          console.count();

          if (this.scroll && this.scroll.viewPortItems) {
            this.scroll.viewPortItems.forEach((item: IvvtDisplay) => {
              item.heightByTime = this.calcHeight(item.start, item.end);
            })
          }
          this.ref.detectChanges()

        })
      });
    });








  }
  calcHeight(start:number, end:number): string {

     if(this.counter > end){
       return '100%';
     }
      const range = end - start;
      const currCalc = this.counter - start;
      if(currCalc < 0){
        return  '0';
      }
      const  percent = currCalc / range * 100;
      return   percent.toFixed(2) + '%'

  }



}
