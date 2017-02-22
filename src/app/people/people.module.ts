import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PeopleListComponent} from './people-list.component';
import {PeopleViewDetailsComponent} from "./people-view-details.component";
import {ContentFilterPipe} from "./content-filter.pipe";
import {PeopleViewDetailsModalComponent} from "./people-view-details-modal.component";
import { ModalModule } from 'ng2-bootstrap';
import {PeopleManagementComponent} from "./people-management.component";
import {PeopleEditComponent} from "./people-edit.component";

@NgModule({
  imports: [BrowserModule,ModalModule],
  declarations: [PeopleManagementComponent,
                 PeopleListComponent,
                 PeopleViewDetailsComponent,
                 PeopleViewDetailsModalComponent
                ,PeopleEditComponent
                ,ContentFilterPipe],
  exports: [PeopleManagementComponent,
            PeopleListComponent,
            PeopleViewDetailsComponent,
            PeopleViewDetailsModalComponent
            ,PeopleEditComponent
            ,ContentFilterPipe]
})
export class PeopleModule { }
