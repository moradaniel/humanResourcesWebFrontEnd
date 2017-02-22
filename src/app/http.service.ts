import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

@Injectable()
export class HttpService {

  //baseUrl: string = 'http://ponyracer.ninja-squad.com';
  baseUrl: string = environment.backend.baseURL;
  headers: Headers = new Headers;
  options: RequestOptions = new RequestOptions({ headers: this.headers});

  constructor(private http: Http) {
    this.setHeaders();
  }

  get(path: string): Observable<any> {
    this.addJwtTokenIfExists();
    return this.http.get(`${this.baseUrl}${path}`, this.options);
        //.map(res => res.json());
  }

  post(path: string, body: any): Observable<any> {
    this.addJwtTokenIfExists();
    return this.http.post(`${this.baseUrl}${path}`, body, this.options)
        .map(res => res.json());
  }

  put(path: string, body: any): Observable<any> {
    this.addJwtTokenIfExists();
    return this.http.put(`${this.baseUrl}${path}`, body, this.options)
      .map(res => res.json());
  }

  delete(path: string): Observable<any> {
    this.addJwtTokenIfExists();
    return this.http.delete(`${this.baseUrl}${path}`, this.options);
  }

  addJwtTokenIfExists() {
    const value = window.localStorage.getItem('rememberMe');
    if (value) {
      const user = JSON.parse(value);
      this.headers.set('X-Authorization', `Bearer ${user.token}`);

    } else {
      this.headers.delete('Authorization');
      this.headers.set('content-type', 'application/json');
      this.headers.set('Accept', 'application/json');
      this.headers.set('X-Requested-With', 'XMLHttpRequest');

      /*

       HttpPost request = new HttpPost("http://localhost:" + port + contextPath+"/api/auth/login");
       StringEntity params = new StringEntity("{\"username\":\"" + userName + "\",\"password\":\"" + password + "\"}");
       request.addHeader("content-type", "application/json");
       request.addHeader("Accept", "application/json");
       request.addHeader("X-Requested-With", "XMLHttpRequest");

       * */
    }
  }

  private setHeaders(){
    //let headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    console.log(JSON.stringify(this.headers));
    //return headers;
  }
}
