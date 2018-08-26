import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + "auth/" + id);
  }
}
