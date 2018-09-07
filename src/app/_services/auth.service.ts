import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.baseUrl + "auth/register", user);
  }
  private isAdminInSubject$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminInSubject$.asObservable();
  get isAdmin(): boolean { return this.isAdminInSubject$.getValue(); }
  set isAdmin(value: boolean) { this.isAdminInSubject$.next(value); }

  login(employee: any) {
    return this.http.post(this.baseUrl + "auth/login", employee).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.isAdmin = this.decodedToken.isAdmin === 'True';
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

  // errorHandler(error: HttpErrorResponse) {
  //   return observableThrowError(error || 'Server Error');
  // }

}
