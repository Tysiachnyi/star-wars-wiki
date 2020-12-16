import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get('https://swapi.dev/api/people/');
  }

  getTextBlockData(): any {
    return this.http.get('http://my-json-server.typicode.com/olehi94/db-placeholder/textBlockData');
  }
}
