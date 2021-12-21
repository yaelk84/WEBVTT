import { Injectable } from '@angular/core';
import {Ivvt, IvvtDisplay} from "../../../model/models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // remove Unnecessary spaces and numbers
  private textConvert(text:string): string{
    return text.replace('\r -','\r-').replace('\r ','\r').replace(/\d+/g,'').replace('\r\r \r','').replace('\r \r \r','');
  }
  private getItem(vvtItem:Ivvt, speaker:string,hideSpeaker:boolean):IvvtDisplay{
    return {
      start: vvtItem.start,
      end:vvtItem.end,
      part: this.textConvert(vvtItem.part),
      speaker:speaker,
      hideSpeaker:hideSpeaker
    }
  }
  data(speakers:string[],vvtData: Ivvt[]): any{
    let  vvtDiplay: IvvtDisplay[] = [];
    vvtData.forEach((item,index)=>{
      const isHide = vvtDiplay.length > 0 && vvtDiplay[index-1] && speakers[index] === vvtDiplay[index-1].speaker ;
      vvtDiplay.push(this.getItem( item,speakers[index],isHide))

    })
    console.log(vvtDiplay)
    return vvtDiplay


  }
}
