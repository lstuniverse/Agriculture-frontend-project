import {Component, OnInit} from '@angular/core';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-md5-generate',
  templateUrl: './md5-generate.component.html',
  styleUrls: ['./md5-generate.component.scss']
})
export class Md5GenerateComponent implements OnInit {
  constructor() {
  }

  email = 'hattaya@gmail.com';

  ngOnInit() {
  }

  generateMD5() {
    const e = Md5.hashStr(this.email);
    alert('sssssss');
    alert(e);
  }
}
