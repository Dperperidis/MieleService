import { Injectable } from "@angular/core";

import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/auth.service";
import { User } from "../_models/user";
import { UsersService } from "../_services/users.service";

@Injectable()
export class AgentCardResolver implements Resolve<User> {
  constructor(
    private router: Router,
    private usersServive:UsersService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.usersServive.getUser(route.params["id"]).pipe(
      catchError(error => {
        this.router.navigate(["/home"]);
        return of(null);
      })
    );
  }
}
