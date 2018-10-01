import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// app
import { AppComponent } from './app.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

export let browserRefresh = false;


const appRoutes: Routes = [
  { path: 'a', component: PageAComponent },
  { path: 'b', component: PageBComponent },
  { path: '',
    redirectTo: '/a',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ) ],
  declarations: [ AppComponent, PageAComponent, PageBComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
