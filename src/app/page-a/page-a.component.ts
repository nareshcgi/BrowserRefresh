import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// app
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  public browserRefresh: boolean;

  constructor() { 
  }

  ngOnInit() {
    this.browserRefresh = browserRefresh;
  }

}