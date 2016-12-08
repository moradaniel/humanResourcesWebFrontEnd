import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';

import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService{
  //private baseUrl: string = 'http://swapi.co/api';
  //private baseUrl: string = 'http://localhost:4200/api';
  private baseUrl: string = environment.backend.baseURL;
  //private baseUrl: string = '/api';


  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/users`, {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }

  get(id: number): Observable<Person> {
    let person$  = this.http
      .get(`${this.baseUrl}/users/${id}`, {headers: this.getHeaders()})
      .map(mapPerson)
      .catch(handleError);

    //let arrayPersons = <Array<Person>>person$;

    //<Array<number>>x

      //if(Array.isArray(person$) && Array.length(person$)>0){

     // }
      //return person$[0];
    return person$;
  }

  saveOrUpdate(person: Person) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:

    console.log(JSON.stringify(person));

    if(person.id){
      return this.http
        .put(`${this.baseUrl}/users/`, JSON.stringify(person), {headers: this.getHeaders()})
        .map(mapPersons)
        .catch(handleError);
    }
    return this.http
      .post(`${this.baseUrl}/users/`, JSON.stringify(person), {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);

  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(JSON.stringify(headers));
    return headers;
  }
}

function mapPersons(response:Response): Person[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson);
}


function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
 // return toPerson(response.results.json());

  let persons:Array<Person> = mapPersons(response);//.json().results.map(toPerson);

  if(persons && persons.length===1){
    return persons[0];
  }else{
    return null;
  }


 //return response.json().results(toPerson);
}

function toPerson(r:any): Person{
  let person = <Person>( {
    //id: extractId(r),
    id:r.id
    //,url: r.url,
    ,name: r.name
    //,address: r.address,
    //,height: r.height
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}



// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
