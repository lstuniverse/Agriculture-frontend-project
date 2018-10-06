import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Reactive
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {

    constructor(private _http: Http) { }

    login(username: string, password: string) {

        const headers: any = new Headers({ 'Content-Type': 'application/json' });
        const options: any = new RequestOptions({ headers: headers });
        const params = { 'username': username, 'password': password };

        return this._http.post('../../assets/users.json', { headers: options, params: params })
            .toPromise().then((response: any) => {
                const response_object = JSON.parse(response._body);
                console.log(response_object);
                return response_object;
            }).catch((error: any) => {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('POST LOGIN ERROR ' + error.status, Observable.throw(new Error(error.status)));

                    // ERROR FROM CLIENT
                } else {
                    console.error('POST LOGIN 500 Internal Server');
                }

            });

    }


}
