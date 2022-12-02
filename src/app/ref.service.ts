import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefService {

  constructor(public http: HttpClient) { }


  getCountries(){
    let url = 'https://api.first.org/data/v1/countries';
    return this.http.get(url);
  }
}
