import { Component, OnInit } from "@angular/core";
import { TechService } from "../../_services/tech.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { User } from "../../_models/user";

import { ExternalTechs } from "../../_models/externalTechs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-tech-fotiadis",
  templateUrl: "./tech-fotiadis.component.html",
  styleUrls: ["./tech-fotiadis.component.css"]
})
export class TechFotiadisComponent implements OnInit {
  tech = new ExternalTechs();
  tasks = new Array<ExternalTechs>();
  user: User;

  constructor(
    private techService: TechService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.techService.getTechTasks().subscribe(res => {
      this.tasks = res;
    });
    this.route.data.subscribe(data => {
      this.user = data["agent"];
    });
  }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      const id = param['id'];
      if (id === "new") {
      } else {
        this.getTask(id);
      }
    });
  }

  createOrUpdate() {
    this.tech.id ? this.updateTask() : this.createTask();
  }

  createTask() {
    this.techService.createTaskOrder(this.tech).subscribe(res => {
      this.tasks.splice(0,0,res);
      this.tech = new ExternalTechs();
    });
  }

  updateTask() {
    this.techService.updateTask(this.tech).subscribe(res => {
      this.toastr.success("H αλλαγή έγινε επιτυχώς");
      this.tech = new ExternalTechs();
    });
  }

  getTask(id: number) {
    this.techService.getTechTask(id).subscribe(
      res => {
        this.tech = res;
      },
      error => {
        this.toastr.error("Kάτι πήγε λάθος");
      }
    );
  }

  delete(id: number) {
    if (window.confirm("Είστε σίγουρος/η οτι θέλετε να διαγράψετε την εντολή;")) {
      const i = this.tasks.findIndex(x => x.id === id);
      this.techService.deleteTask(id).subscribe(
        res => {
          if (res) {
            this.tasks.splice(i, 1);
          }
        },
        error => {
          this.toastr.error(error);
        }
      );
    }
  }
}
