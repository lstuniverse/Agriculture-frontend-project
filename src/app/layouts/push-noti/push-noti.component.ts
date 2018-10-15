import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-push-noti",
  templateUrl: "./push-noti.component.html",
  styleUrls: ["./push-noti.component.scss"]
})
export class PushNotiComponent implements OnInit {
  time: any;
  constructor(private _router: Router) {}

  ngOnInit() {
    this.time = setInterval(() => {
      this.pushNoti();
    }, 3000);
  }

  pushNoti() {
    if ("Notification" in window) {
      const ask = Notification.requestPermission();
      ask.then(permission => {
        if (permission === "granted") {
          const msg = new Notification("Lstuniverse Developer", {
            body: "Welcome to website",
            icon: "../../../assets/img/lst.png"
          });

          msg.addEventListener("click", event => {
            this._router.navigate(["/btn_design"]);
          });
        }
      });
    }
  }
}
