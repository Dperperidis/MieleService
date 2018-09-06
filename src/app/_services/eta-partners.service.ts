import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { EtaPartners } from "../_models/etapartners";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EtaPartnersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPartners(): Observable<Array<EtaPartners>> {
    return this.http.get<Array<EtaPartners>>(this.baseUrl + "partners/coPartner");
  }
}
