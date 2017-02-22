import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {WelcomeComponent} from './welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule,
            RouterModule],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
