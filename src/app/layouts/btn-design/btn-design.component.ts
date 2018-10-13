import { PortService } from "./../../@services/portService";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-btn-design",
  templateUrl: "./btn-design.component.html",
  styleUrls: ["./btn-design.component.scss"]
})
export class BtnDesignComponent implements OnInit {
  btn_switch = false;
  port_objects: any;
  eastSelected: any;
  westSelected: any;
  E_previous_port = 0;
  W_previous_port = 0;
  timerInterval: any;
  constructor(private _portService: PortService) {}

  ngOnInit() {
    this.getPorts();
  }

  getPorts() {
    this._portService.getPort().then(data => {
      this.port_objects = data;
    });
  }

  switch(idx) {
    if (
      this.port_objects[idx]["position"] === "E" &&
      this.port_objects[idx]["status"] !== "disable"
    ) {
      this.port_objects[this.E_previous_port]["lock_by"] = "";
      if (this.port_objects[idx]["lock_by"] !== "lock") {
        this.port_objects[idx]["lock_by"] = "lock";
        this.eastSelected = this.port_objects[idx - 1]["idx"];
        console.log("E: " + this.eastSelected);
        this.E_previous_port = idx;
        this.btn_switch = true;
      }
    } else if (
      this.port_objects[idx]["position"] === "W" &&
      this.port_objects[idx]["status"] !== "disable"
    ) {
      this.port_objects[this.W_previous_port]["lock_by"] = "";
      if (this.port_objects[idx]["lock_by"] !== "lock") {
        this.port_objects[idx]["lock_by"] = "lock";
        this.westSelected = this.port_objects[idx - 1]["idx"];
        console.log("W: " + this.westSelected);
        this.W_previous_port = idx;
        this.btn_switch = true;
      }
    }
  }

  checkPort(idx) {
    if (this.btn_switch && this.port_objects[idx]["lock_by"] === "lock") {
      return "btn-switch";
    } else {
      return "btn";
    }
  }
}
