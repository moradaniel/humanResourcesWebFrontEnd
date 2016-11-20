/*
import { Component } from '@angular/core';

@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planets works1!';
}
*/

import { Component, OnInit } from '@angular/core';
//import { Planets, PlanetsService } from './shared';
//import { PeopleService } from './people/people.service';


@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,providers: [PeopleService]
})

/*
@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [PeopleService]
})
*/

export class AppComponent implements OnInit {
  /*title = "These are the Solar System's planets";
  planetsList: Planets[] = [];
  constructor(
    private _planetservice: PlanetsService) {}
*/
  ngOnInit() {
    //this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }
}
