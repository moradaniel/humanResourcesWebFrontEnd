import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-view-details',
  templateUrl: './people-view-details.component.html',
  providers: [PeopleService]
})
export class PeopleViewDetailsComponent implements OnInit{
  @Input()  id:number;

  person: Person = {

    id: 0
    , name: ""
    , weight: 0
    , height: 0
  // it is optional because I know it
  // doesn't exist in the API that we will
  // consume in the next exercise :)
  ,  profession: ""
}

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService : PeopleService){ }

  ngOnInit(){
    this.peopleService
      .get(this.id)
      .subscribe(
         /* happy path */ p => this.person = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}
