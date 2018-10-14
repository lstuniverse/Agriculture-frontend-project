import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  show_step_1 = false;
  show_step_2 = false;
  show_step_3 = false;
  Model_user: any = {};

  constructor() {}

  ngOnInit() {}

  check(){
    
  }

}
