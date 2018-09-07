import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthService } from "../_services/auth.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    return true;
    // if (this.authService.loggedIn()) {
    //   return true;
    // } else {
    //   this.toastr.error("Please Sign In first");
    //   this.router.navigate(["/"]);
    //   return false;
    // }
  }

}
