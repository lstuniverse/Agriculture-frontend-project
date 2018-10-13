import { Injectable } from "@angular/core";
import {
  Headers,
  Http,
  RequestOptions
} from "@angular/http";

// Reactive
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PortService {
  constructor(private _http: Http) {}

  getPort() {
    const headers: any = new Headers({ "Content-Type": "application/json" });
    const options: any = new RequestOptions({ headers: headers });

    return this._http
      .get("../../assets/port_config.json", { headers: options })
      .toPromise()
      .then((response: any) => {
        const response_object = JSON.parse(response._body);
        return response_object;
      })
      .catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {
          console.error(
            "GET WEST DESCRIPTION PORT ERROR " + error.status,
            Observable.throw(new Error(error.status))
          );
          return { status: "error", error: "ERROR " + error.status };

          // ERROR FROM CLIENT
        } else {
          console.error("GET WEST DESCRIPTION PORT ERROR 500 Internal Server");
          return { status: "error", error: "ERROR 500" };
        }
      });
  }

  getPortCompair() {
    const headers: any = new Headers({ "Content-Type": "application/json" });
    const options: any = new RequestOptions({ headers: headers });

    return this._http
      .get("../../assets/portCompair.json", { headers: options })
      .toPromise()
      .then((response: any) => {
        const response_object = JSON.parse(response._body);
        return response_object;
      })
      .catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {
          console.error(
            "GET WEST DESCRIPTION PORT ERROR " + error.status,
            Observable.throw(new Error(error.status))
          );
          return { status: "error", error: "ERROR " + error.status };

          // ERROR FROM CLIENT
        } else {
          console.error("GET WEST DESCRIPTION PORT ERROR 500 Internal Server");
          return { status: "error", error: "ERROR 500" };
        }
      });
  }

  getEPort() {
    const headers: any = new Headers({ "Content-Type": "application/json" });
    const options: any = new RequestOptions({ headers: headers });

    return this._http
      .get("../../assets/portE.json", { headers: options })
      .toPromise()
      .then((response: any) => {
        const response_object = JSON.parse(response._body);
        return response_object;
      })
      .catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {
          console.error(
            "GET WEST DESCRIPTION PORT ERROR " + error.status,
            Observable.throw(new Error(error.status))
          );
          return { status: "error", error: "ERROR " + error.status };

          // ERROR FROM CLIENT
        } else {
          console.error("GET WEST DESCRIPTION PORT ERROR 500 Internal Server");
          return { status: "error", error: "ERROR 500" };
        }
      });
  }

  getWPort() {
    const headers: any = new Headers({ "Content-Type": "application/json" });
    const options: any = new RequestOptions({ headers: headers });

    return this._http
      .get("../../assets/portW.json", { headers: options })
      .toPromise()
      .then((response: any) => {
        const response_object = JSON.parse(response._body);
        return response_object;
      })
      .catch((error: any) => {
        // ERROR FROM SERVER
        if (error.status && error.status !== 0) {
          console.error(
            "GET WEST DESCRIPTION PORT ERROR " + error.status,
            Observable.throw(new Error(error.status))
          );
          return { status: "error", error: "ERROR " + error.status };

          // ERROR FROM CLIENT
        } else {
          console.error("GET WEST DESCRIPTION PORT ERROR 500 Internal Server");
          return { status: "error", error: "ERROR 500" };
        }
      });
  }
}
