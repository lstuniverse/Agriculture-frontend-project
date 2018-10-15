import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  percentDone: number;
  uploadSuccess: boolean;
  size: any;
  width: number;
  height: number;
  imgs: any;
  img_name: any;
  img_size: any;
  @ViewChild("coverFilesInput")
  imgType: ElementRef;

  constructor() {}

  ngOnInit() {}

  getSize(evt: any) {
    this.percentDone = 100;
    this.uploadSuccess = true;
    const image: any = evt.target.files[0];
    this.size = image.size;
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();

      img.onload = () => {
        this.width = img.width;
        this.height = img.height;
      };

      img.src = fr.result;
    };

    fr.readAsDataURL(image);
    this.imgType.nativeElement.value = "";
  }

  onChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.img_name = event.target.files[0]["name"];
      this.img_size = event.target.files[0]["size"];

      const reader = new FileReader();
      reader.onload = (events: ProgressEvent) => {
        this.imgs = (<FileReader>events.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
    this.getSize(event);
  }
}
