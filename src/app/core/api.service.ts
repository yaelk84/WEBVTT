import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAvatar(): Observable<any> {

    return this.http.get('/assets/stub/division.json').pipe(
      mergeMap((response: { divisions: [] }) => {
        const auto = [];
        return of(auto);

      })
    );
  }
}
