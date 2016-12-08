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
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

//import { PlanetsService } from './shared';

import { routingModule } from './app.routes';

import { AppComponent } from './app.component';

import { MyComponent } from './my-component/my-component.component';

//import { PeopleListComponent } from './people/people-list.component';
import {PeopleModule} from "./people/people.module";
//import {PlanetsModule} from "./people/people.module";

import { PlanetsListComponent } from './planets/planets-list.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {WelcomeModule} from "./welcome/welcome.module";


@NgModule({
  declarations: [
    AppComponent,
    MyComponent
    //,PeopleListComponent
    ,PlanetsListComponent
   // ,PeopleViewDetailsComponent
  ],
  imports: [
    BrowserModule,
 //   routing,
    FormsModule,
    HttpModule,
    //Custom modules
    PeopleModule,
    //Bootstrap modules
    AlertModule
    ,ModalModule
    ,WelcomeModule
    ,routingModule
  ],

  //providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
