/**

 Sample: coenraadf-angular-ponyracer-master
 2016 - Become a ninja with Angular 2.pdf

 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { UserModel } from '../model/user.model';
import { HttpService } from '../../http.service';

@Injectable()
export class UserService {

  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: HttpService) {
    this.retrieveUser();
  }

  register(username, password, birthYear): Observable<UserModel> {
    const body = {username, password, birthYear};
    return this.http.post('/api/users', body);
  }

  authenticate(credentials): Observable<UserModel> {
    window.localStorage.removeItem('rememberMe');
    return this.http
        //.post('/api/users/authentication', credentials)
        .post('/auth/login', credentials)

        .do(user => this.storeLoggedInUser(user));

  }

  storeLoggedInUser(user) {
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.userEvents.next(user);
  }

  retrieveUser() {
    const value = window.localStorage.getItem('rememberMe');
    if (value) {
      const user = JSON.parse(value);
      this.userEvents.next(user);
    }
  }

  logout() {
    this.userEvents.next(null);
    window.localStorage.removeItem('rememberMe');
  }
}
