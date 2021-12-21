import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren, ContentChildren, HostListener
} from '@angular/core';

let viewChild = ViewChild;
@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent implements OnInit, AfterViewInit {
  @Input() itemCount = 10000;
  @Input() height = 300;
  @Input() childHeight = 30;
  @ViewChild('inne1r') myDiv: ElementRef;
  items: string[] = [];
  sum = 0;
  renderAhread = 20
  totalHeight: number = 30000
  viewportHeight: number
showItem = []
  lastRepaintY;
  offsetY;
  indexOfItem = 0;
  constructor() {
  }
  someCallbackMethod(){
    console.log("resdy")
  }
  @Input()
  set ready(isReady: boolean) {
    if (isReady) this.someCallbackMethod();
  }
  ngOnInit(): void {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`this is ${i}`)
    }
    this.totalHeight = this.itemCount * this.childHeight;
    this.showItem = this.items.splice(0, Math.ceil(this.height / this.childHeight) + 2 * this.renderAhread)
    this.offsetY = 0;
  }
  @ViewChildren('testDiv') testDiv: QueryList<ElementRef<HTMLDivElement>>;

  isTestDivScrolledIntoView: boolean;




  onScroll(e): void {
    requestAnimationFrame(() => {


      const elemArray = this.testDiv.toArray()
      const elem = this.testDiv.last;
      const elemLastKey = elem.nativeElement.attributes["key"].value;
      const current = this.showItem[0].replace('this is', '').trim()

      console.log("kast - current", elemLastKey, current)
      const rect = elem.nativeElement.getBoundingClientRect();
      const html = document.documentElement;
      const isVisible = (
        (rect.top + rect.height) >= 0 &&
        (rect.bottom - rect.height - this.renderAhread) <= (window.innerHeight || html.clientHeight));
if(isVisible){
  debugger
      if ((+elemLastKey > current)) {
        console.log("ggg")
        const scrollTop = e.target.scrollTop;
        const totalHeight = this.itemCount * this.childHeight;
        let startNode = Math.floor(scrollTop / this.childHeight) - this.renderAhread;
        startNode = Math.max(0, startNode);
        this.offsetY = startNode * this.childHeight;
        let visibleNodeCount = Math.ceil(this.height / this.childHeight) + 2 * this.renderAhread;
        visibleNodeCount = Math.min(this.itemCount - startNode, visibleNodeCount);
        console.log(startNode, visibleNodeCount)
        this.indexOfItem += visibleNodeCount - 10;
        this.showItem = [...this.items.splice(this.indexOfItem, visibleNodeCount)]
        this.sum += visibleNodeCount;

      }
    }

          });




  };

  aa(index) {
    debugger
    const classAA =".aa" + index;
    const elem = document.querySelectorAll(classAA)[0];
      const rect = elem.getBoundingClientRect();
    const html = document.documentElement;
    const isVisible = (
      (rect.top + rect.height) >= 0 &&
      (rect.bottom - rect.height - this.renderAhread) <= (window.innerHeight || html.clientHeight));

     console.log('vvvv',isVisible)



  }

  ngAfterViewInit(): void {
    this.testDiv.changes.subscribe(()=>{
      console.log("change")
    })
  }

}
