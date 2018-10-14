import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-iframe-resizer",
  templateUrl: "./iframe-resizer.component.html",
  styleUrls: ["./iframe-resizer.component.scss"]
})
export class IframeResizerComponent implements OnInit {
  url: any;
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/n4tFuxxKHgo"
    );
  }
}
