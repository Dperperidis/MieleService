import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

import { Technician } from "../_models/technician";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExternalTechs } from "../_models/externalTechs";

@Injectable({
  providedIn: "root"
})
export class TechService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createTech(technician: Technician) {
    return this.http.post(this.baseUrl + "techs/register", technician);
  }

  getTechs(): Observable<Array<Technician>> {
    return this.http.get<Array<Technician>>(this.baseUrl + "techs/techlist");
  }

  createTaskOrder(techs: ExternalTechs): Observable<ExternalTechs> {
    return this.http.post<ExternalTechs>(this.baseUrl + "techs/externalOrder", techs);
  }

  getTechTasks(): Observable<Array<ExternalTechs>> {
    return this.http.get<Array<ExternalTechs>>(this.baseUrl + "techs/getTasks");
  }

  getTechTask(id: number) :Observable<ExternalTechs> {
    return this.http.get<ExternalTechs>(this.baseUrl + "techs/" + id)
  }

  updateTask(techs: ExternalTechs) : Observable<ExternalTechs> {
    return this.http.post<ExternalTechs>(this.baseUrl + "techs/update", techs);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.post(this.baseUrl + 'techs/delete/' + id, {})
  }
}
