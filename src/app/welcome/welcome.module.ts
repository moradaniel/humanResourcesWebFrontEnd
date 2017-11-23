/**
 * 2016 - Unraveling Angular 2 The Ultimate Beginners Guide with over 130 Complete Samples
 */


import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {WelcomeComponent} from './welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [BrowserModule,
            RouterModule],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {



}
