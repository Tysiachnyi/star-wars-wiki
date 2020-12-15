import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPeople() {
    const url = 'https://swapi.dev/api/people/';

    return this.http
      .get(url);
  }
}
