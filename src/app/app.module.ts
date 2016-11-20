/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { PlanetsService } from './shared';

//import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { MyComponent } from './my-component/my-component.component';

//import { PeopleListComponent } from './people/people-list.component';
import {PeopleModule} from "./people/people.module";
//import {PlanetsModule} from "./people/people.module";

import { PeopleListComponent } from './people/people-list.component';
import { PlanetsListComponent } from './planets/planets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent
    //,PeopleListComponent
    ,PlanetsListComponent

  ],
  imports: [
    BrowserModule,
 //   routing,
    FormsModule,
    HttpModule,
    PeopleModule
  ],
  //providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
