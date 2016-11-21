
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sec-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,providers: [PeopleService]
})

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
