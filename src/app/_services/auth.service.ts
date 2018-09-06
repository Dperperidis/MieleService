import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {
  throwError as observableThrowError,
  Observable,
  BehaviorSubject
} from "rxjs";
import { catchError, map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = environment.apiUrl;
  user: User;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(this.baseUrl + "auth/register", user);
  }

  login(employee: any) {
    return this.http.post(this.baseUrl + "auth/login", employee).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          console.log(this.decodedToken);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + "auth/agents");
  }

}
