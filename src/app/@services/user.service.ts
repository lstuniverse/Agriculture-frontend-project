import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, ResponseContentType} from '@angular/http';

// Reactive
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: Http) {
  }

  getUser() {

    const headers: any = new Headers({'Content-Type': 'application/json'});
    const options: any = new RequestOptions({headers: headers});

    return this._http.get('../../assets/users.json', {headers: options}).toPromise().then((response: any) => {
      const response_object = JSON.parse(response._body);
      return response_object;
    }).catch((error: any) => {
      // ERROR FROM SERVER
      if (error.status && error.status !== 0) {
        console.error('GET WEST DESCRIPTION PORT ERROR ' + error.status, Observable.throw(new Error(error.status)));
        return ({status: 'error', error: 'ERROR ' + error.status});

        // ERROR FROM CLIENT
      } else {
        console.error('GET WEST DESCRIPTION PORT ERROR 500 Internal Server');
        return ({status: 'error', error: 'ERROR 500'});
      }

    });

  }

}
