import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BidService {
BASE_URL = 'http://localhost:3000'
  constructor(private myHttp: Http) { }
  getList() {
      return this.myHttp.get(`${this.BASE_URL}/api/bids`)
        .toPromise()
        .then(apiResponse => apiResponse.json())
    }
      get(id) {
        return this.myHttp.get(`${this.BASE_URL}/api/bids/${id}`)
          .toPromise()
          .then(apiResponse => apiResponse.json())
      }

      remove(id) {
        return this.myHttp.delete(`${this.BASE_URL}/api/bids/${id}`)
          .toPromise()
          .then(apiResponse => apiResponse.json())
      }

}
