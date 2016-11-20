import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PeopleListComponent} from './people-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PeopleListComponent],
  exports: [PeopleListComponent]
})
export class PeopleModule { }
