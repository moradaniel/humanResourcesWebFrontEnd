import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PeopleListComponent} from './people-list.component';
import {PeopleViewDetailsComponent} from "./people-view-details.component";
import {ContentFilterPipe} from "./content-filter.pipe";

@NgModule({
  imports: [BrowserModule],
  declarations: [PeopleListComponent,PeopleViewDetailsComponent,ContentFilterPipe],
  exports: [PeopleListComponent,PeopleViewDetailsComponent,ContentFilterPipe]
})
export class PeopleModule { }
