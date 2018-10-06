import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-circle-progress",
  templateUrl: "./ng-circle-progress.component.html",
  styleUrls: ["./ng-circle-progress.component.scss"]
})
export class NgCircleProgressComponent implements OnInit {
  // circle progress
  Available = 40;
  titleAvailable = "Available";
  Connect = 80;
  titleConnect = "Connect";
  Disable = 24;
  titleDisable = "Disable";
  backgroundColorAvailable = "#00ff00";
  backgroundColorConnect = "#ff1a1a";
  backgroundColorDisable = "#c0c0c0";
  radius = 40;
  maxPercent = 144;
  unitsColor = "#483500";
  unitsFontSize = 20;
  showUnits = false;
  titleColor = "#FFFFFF";
  titleFontSize = 18;
  outerStrokeColor = "#FFFFFF";
  innerStrokeColor = "#FFFFFF";
  outerStrokeWidth = 5;
  showSubtitle = true;
  subtitleFontSize = 14;
  subtitleColor = "#ffffff";
  showInnerStroke = false;
  startFromZero = false;

  constructor() {}

  ngOnInit() {}
}
