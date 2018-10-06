import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // let roles = route.data['roles'] as Array<string>;
    const role = route.data['role'];
    // console.log(role);
    // return (roles == null || roles.indexOf('the-logged-user-role') != -1);
    const remember_user_data = JSON.parse(localStorage.getItem('userData'));

    if (remember_user_data !== null) {
      // console.log(remember_user_data);
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
