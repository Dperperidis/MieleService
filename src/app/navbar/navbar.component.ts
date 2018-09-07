import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
import { User } from "../_models/user";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subscription } from "rxjs";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  isAdmin = false;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.auth.isAdmin$.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.decodedToken = null;
    this.toastr.success("Logout Success");
    this.router.navigate(['/']);
  }


}
