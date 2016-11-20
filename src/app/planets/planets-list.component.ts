import { Component, OnInit } from '@angular/core';
//import { Person } from './person';
//import { PeopleService } from './people.service';
import { Planets} from './planets.model';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'planets-list',
  template: `

<h1>
  {{title}}
</h1>

<ul>
  <li *ngFor="let planet of planetsList">{{planet.name}}</li>
</ul>
  `
  ,providers: [PlanetsService]
})
export class PlanetsListComponent implements OnInit{
  title = "These are the Solar System's planets";
  planetsList: Planets[] = [];
  constructor(
    private _planetservice: PlanetsService) {}

  ngOnInit() {
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }
}
