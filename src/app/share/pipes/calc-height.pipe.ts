import { Pipe, PipeTransform } from '@angular/core';
import {count} from "rxjs/operators";

@Pipe({
  name: 'calcHeight'
})
export class CalcHeightPipe implements PipeTransform {

  transform(value: unknown, start:number, end:number): unknown {

   debugger
    const range = end - start;
    const currCalc = +value - start
    if(currCalc < 0){
      return  '0'
    }
    const precent = currCalc / range * 100;
    console.log(precent)
 return  precent + '%'
  }

}
