import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-iframe-resizer",
  templateUrl: "./iframe-resizer.component.html",
  styleUrls: ["./iframe-resizer.component.scss"]
})
export class IframeResizerComponent implements OnInit {
  url: any;
  // "https://www.youtube.com/embed/n4tFuxxKHgo"
  url_object =
    // tslint:disable-next-line:max-line-length
    "https://firebasestorage.googleapis.com/v0/b/testweb-95923.appspot.com/o/Screenshot-54.png?alt=media&token=8eb32fe6-c50b-478c-998c-4b1f137624c5";
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url_object);
  }
}
