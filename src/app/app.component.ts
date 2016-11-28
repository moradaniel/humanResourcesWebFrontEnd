
import {Component, OnInit, ViewContainerRef} from '@angular/core';


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
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    //this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }
}
