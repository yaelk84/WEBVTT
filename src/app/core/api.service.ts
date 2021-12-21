import { Injectable } from '@angular/core';import { Observable, of} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Ivvt} from "../../../model/models";

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private vttToJson = require("vtt-to-json");
  constructor(private http: HttpClient) { }

  private formatVvt(response): Observable<any>{
        return this.vttToJson(response)
     };

  public getBridgeTx(): Observable<Ivvt[]> {
    return this.http.get('/assets/stubs/bridge.vtt', {responseType: 'text'}).pipe(
      mergeMap((response) => {
      return this.formatVvt(response)
      })
    );
  }

  public getCharacters(): Observable<string[]> {
    return this.http.get('/assets/stubs/characters.json').pipe(
      mergeMap((response: string[]) => {
        return of(response);



      })
    );
  }



}
