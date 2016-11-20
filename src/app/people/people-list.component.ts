import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  providers: [PeopleService]
})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
