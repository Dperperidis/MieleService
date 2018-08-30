import { Component, OnInit } from "@angular/core";
import { ExternalTechs } from "../../_models/externalTechs";
import { TechService } from "../../_services/tech.service";
import { Http2SecureServer } from "http2";
import { HttpClient } from "@angular/common/http";
import {
  trigger,
  style,
  state,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-external-techs",
  templateUrl: "./external-techs.component.html",
  styleUrls: ["./external-techs.component.css"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class ExternalTechsComponent implements OnInit {
  panelOpenState = false;
  techs = {};
  techTasks;

  constructor(private techService: TechService, private http: HttpClient) {
    this.techService.getTechTasks().subscribe(res => {
      this.techTasks = res;
    });
  }

  ngOnInit() {}

  createTask(details) {
    this.techs = {};
    this.techService.createTaskOrder(details).subscribe(res => {
      this.techTasks.push(res);
    });
  }
}
