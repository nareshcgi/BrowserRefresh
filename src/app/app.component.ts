import { Component, OnDestroy,HostListener } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnDestroy {
  name = 'Angular 6';
  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          browserRefresh = !router.navigated;
        }
        if (event instanceof NavigationEnd) {
          console.log("Inside Navigation End");
        }        
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
