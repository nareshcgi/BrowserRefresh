import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
            console.log("Performance Inside ngOnInit:"+window.performance.navigation.type);
  }
      @HostListener('window:beforeunload', ['$event'])
    unloadHandler(event) {
        debugger
        console.log('Inside window before unload'+event);
        console.log("Performance:"+window.performance.navigation.type);
    }
    @HostListener('window:unload', ['$event'])
    unload(event) {
        console.log('Inside window unload'+event.toString());
    }
}