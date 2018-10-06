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

export class RoleGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = route.data['role'];
    const remember_user_data = JSON.parse(localStorage.getItem('userData'));

    if (remember_user_data !== null && remember_user_data.level === role) {
      console.log('Level: ' + remember_user_data.level);
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }
  }
}
