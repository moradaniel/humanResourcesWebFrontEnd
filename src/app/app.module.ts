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
import { AlertModule } from 'ng2-bootstrap';

//import { PlanetsService } from './shared';

import { routingModule } from './app.routes';

import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { MyComponent } from './my-component/my-component.component';

import {UserService} from './security/service/user.service';
//import { PeopleListComponent } from './people/people-list.component';
import {PeopleModule} from "./people/people.module";
//import {PlanetsModule} from "./people/people.module";

import { PlanetsListComponent } from './planets/planets-list.component';
import { ModalModule } from 'ng2-bootstrap';
import {WelcomeModule} from "./welcome/welcome.module";
import {HttpService} from './http.service';
import {LoginComponent} from './security/authentication/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
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
    ,ModalModule.forRoot()
    ,WelcomeModule
    ,routingModule
  ],

  providers: [UserService,
              HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
