import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';
import {ContentFilterPipe} from './content-filter.pipe'
import {PeopleViewDetailsModalComponent} from "./people-view-details-modal.component";

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  providers: [PeopleService,ContentFilterPipe,PeopleViewDetailsModalComponent]
})
export class PeopleListComponent implements OnInit{
  private _index = 0;
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  @Output() onView = new EventEmitter<Person>();

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }


  public viewPerson(person:Person) {
    this.onView.emit(person);
  }

  /*public enableAdd() {
    return this._index < this.people.length;
  }
  public addUser() {
    if (this.enableAdd()) {
      this.people.push(this.people[this._index++]);
    }
  }
  public clearUsers() {
    //this.people = [];
    this._index = 0;
  }*/
}
