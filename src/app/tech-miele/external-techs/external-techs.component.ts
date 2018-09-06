import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-external-techs",
  templateUrl: "./external-techs.component.html",
  styleUrls: ["./external-techs.component.css"]
})
export class ExternalTechsComponent implements OnInit, OnDestroy {
  constructor() {
    document.body.style.backgroundImage =
      "url(../../../../assets/img/backgroundtechmiele.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "auto";
  }

  ngOnInit() {}

  ngOnDestroy() {
    document.body.style.backgroundImage = '';
  }
}
