import { Component, OnInit } from "@angular/core";
import { EtaPartnersService } from "../_services/eta-partners.service";
import { EtaPartners } from "../_models/etapartners";

@Component({
  selector: "app-etapartners",
  templateUrl: "./etapartners.component.html",
  styleUrls: ["./etapartners.component.css"]
})
export class EtapartnersComponent implements OnInit {
  partner: EtaPartners[];
  filteredPartner: any[];
  data = true;
  toggle = false;

  constructor(private eta: EtaPartnersService) { }

  ngOnInit() {
    this.eta.getPartners().subscribe(res => {
      this.partner = res;
    });
  }

  filter(query: string) {
    if (query.length === 0) {
      this.filteredPartner = []
    }
    if (this.data == true) {
      this.filteredPartner = query
        ? this.partner.filter(t =>
          t.city.toLowerCase().includes(query.toLowerCase())
        )
        : this.partner;
    } else {
      this.filteredPartner = query
        ? this.partner.filter(p =>
          p.nomos.toLowerCase().includes(query.toLowerCase())
        )
        : this.partner;
    }
  }

  changeSearch() {
    this.data = !this.data;
  }
}
