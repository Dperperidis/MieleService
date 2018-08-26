import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { User } from "src/app/_models/user";

@Component({
  selector: "app-agent",
  templateUrl: "./agent.component.html",
  styleUrls: ["./agent.component.css"]
})
export class AgentComponent implements OnInit {
  agents: User[];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe(res => {
      this.agents = res;
    });
  }
}
