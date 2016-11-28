import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PeopleListComponent} from './people-list.component';
import {PeopleViewDetailsComponent} from "./people-view-details.component";
import {ContentFilterPipe} from "./content-filter.pipe";
import {PeopleViewDetailsModalComponent} from "./people-view-details-modal.component";
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [BrowserModule,ModalModule],
  declarations: [PeopleListComponent,
                 PeopleViewDetailsComponent,
                 PeopleViewDetailsModalComponent,
                 ContentFilterPipe],
  exports: [PeopleListComponent,
            PeopleViewDetailsComponent,
            PeopleViewDetailsModalComponent,
            ContentFilterPipe]
})
export class PeopleModule { }
