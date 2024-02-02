import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {
    console.log('in HttpServiceService constructor')
  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean).subscribe(data => {
      callback(data);
    }, (data) => {
      console.log('fail');
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint).subscribe(data => {
      callback(data);
    });
  }

  getPathVariable(route: ActivatedRoute, callback: any) {
    route.params.subscribe(params => {
      callback(params)
    });
  }
}
