import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  Model_user: any = {};

  constructor(private _route: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.Model_user.username == 'admin' && this.Model_user.password == 'admin') {
      localStorage.setItem('userData', JSON.stringify({'username': 'admin', 'level': 'admin'}));
      this._route.navigate(['/home']);
      return true;
    } else {
      return false;
    }
  }
}
