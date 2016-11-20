import {Component, OnInit, Input,Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {User} from "./users.model";
import { Observable }     from 'rxjs/Observable';
import '../shared/rxjs-operators';


@Component({
  selector: 'my-component',
  //inputs: ['name'],

//  template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'

  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']

})
@Injectable()
export class MyComponent implements OnInit {

  @Input()  name:String;
  @Input()  id:number;

  public user: User;

  private usersUrl = 'http:localhost:3000/users/';  // URL to web API
  //private usersUrl = 'users/';  // URL to web API

  //private name:string;// = "";
  constructor(private http: Http) {
    //this.name = 'Max'

  }

  /*getUser(){
    return this.http.get(''+this.id);
  }*/
  getUser () {
    let person =  this.http.get(this.usersUrl+this.id);

    console.log(person);
  }

  getUser2 (): Observable<User> {
    return this.http.get(this.usersUrl+this.id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  /**
   * A lifecycle method
   * that is automatically
   * envoked when the component
   * is created.
   */
  ngOnInit() {
    this.getUser2();
    try {
      console.log('inputs are ',this.name);
      /*console.log("AppComponent "+this.dateAndTime);
      this.formattedStrDate = "2016/10/11 10:44 PM";
      this.dateFormat = "YYYY/MM/DD hh:mm A";
      this.showPicker = false;
      this.initDateTime(new Date());
      var item:any = this.el.querySelector("#dateTextId");
      this.compTop = item.offsetTop + 35;
      this.compLeft = item.offsetLeft + 10;*/
    } catch (error) {
      console.log(error);
    }

  }

  sayMyName() {
    console.log('My name is', this.name);
  }

  saySomething(message:string){

    let message2 = "pepe";
    const PI : number = 3.14;

    if(true){
      message2 = "pepe2";
    }

    console.log('My message is', message +" "+ PI);

    return message2;
  }
}
