import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {element} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'base';

  ngOnInit(): void {


  }


}
