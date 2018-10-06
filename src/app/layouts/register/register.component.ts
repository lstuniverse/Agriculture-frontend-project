import {Component, OnInit} from '@angular/core';
import {User} from '../../@models/user';
import { UserService } from '../../@services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  success = false;
  failed = false;
  Model_user: any = {};
  users: User[];

  constructor(private _users: UserService) {
  }

  ngOnInit() {
    this._users.getUser().then((data) => {
   this.users = data;
   console.log(this.users);
    });
  }

  register() {
    if (this.validate(this.Model_user.username) === true) {
      console.log('exist');
      this.failed = true;
      this.success = false;
    } else {
      this.success = true;
      this.failed = false;
      console.log('available');
    }
  }

  validate(username) {
    for (const key in this.users) {
      if (this.users.hasOwnProperty(key)) {
        if (username.toLowerCase() === this.users[key]['username'].toLowerCase()) {
          return true;
        }
      }
    }
  }

  validateRegisterBtn() {
    if (this.Model_user.username && this.Model_user.password) {
      return true;
    } else {
      return false;
    }
  }

}
