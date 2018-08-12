import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router) {
  }

  canActivate() {

    const remember_user_data = JSON.parse(localStorage.getItem('userData'));

    if (remember_user_data !== null) {
      console.log(remember_user_data);

      if (remember_user_data.level == 'admin') {
        console.log('level: ' + remember_user_data.level);
      } else {
        console.log('anonymous');
      }

      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }

  }

}
