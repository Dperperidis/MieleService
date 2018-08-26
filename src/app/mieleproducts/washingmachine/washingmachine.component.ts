import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-washingmachine",
  templateUrl: "./washingmachine.component.html",
  styleUrls: ["./washingmachine.component.css"]
})
export class WashingmachineComponent implements OnInit {
  washingmachine = [
    {
      img: "../../../assets/img/products/washingmachine/intensecleanmukhtes.jpg",
      title: "Καθαριστικό για μύκητες, πλυντηρίου ρούχων και πιάτων",
      desc:
        "IntenseClean, Για υγιεινή καθαριότητα σε πλυντήρια πιάτων και πλυντήρια ρούχων ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10717070&name=GP_CL_WG_252_P",
      price: "12"
    },
    {
      img: "../../../assets/img/products/washingmachine/intensecleanalata1.jpg",
      title: "Καθαριστικό αλάτων πλυντηρίου ρούχων και πιάτων",
      desc:
        "Απομακρύνει επιβλαβείς επικαθίσεις αλάτων από πλυντήρια πιάτων και ρούχων. ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10131070&name=GP_DC_WG_0252_P",
      price: "12"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/tabs.jpg",
      title: "Ταμπλέτες αποσκλήρυνσης νερού πλυντηρίου ρούχων",
      desc:
        "H ασφαλής διπλή προστασία από τα άλατα για ρούχα και πλυντήρια ρούχων. 60 ταμπλέτες ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10128710&name=GP_WS_W_0602_T",
      price: "26"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/twindoscare.jpg",
      title: "Καθαριστικό για το σύστημα δοσολογίας TwinDos",
      desc:
        "Για ξέβγαλμα των γραμμών δοσομετρητή TwinDos,Χρήση πριν από μεγάλη περίοδο αδράνειας",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10563710&name=GP_TD_151_L",
      price: "14"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/ultracolor.jpg",
      title: "Υγρό απορρυπαντικό UltraColor 2 για χρωματιστά",
      desc:
        "Τα καλύτερα αποτελέσματα πλύσης στους 20/30/40/60° C,Μεγάλης απόδοσης — για 30 πλύσεις ",
      link:
        "https://www.miele.gr/domestic/miele-detergents-2165.htm?mat=10223660&name=WA_UC_2003_L",
      price: "14"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/intensecleanalata1.jpg",
      title: "Καθαριστικό αλάτων πλυντηρίου ρούχων και πιάτων",
      desc:
        "IntenseClean, Για υγιεινή καθαριότητα σε πλυντήρια πιάτων και πλυντήρια ρούχων ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10717070&name=GP_CL_WG_252_P",
      price: "12"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/intensecleanalata1.jpg",
      title: "Καθαριστικό αλάτων πλυντηρίου ρούχων και πιάτων",
      desc:
        "IntenseClean, Για υγιεινή καθαριότητα σε πλυντήρια πιάτων και πλυντήρια ρούχων ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10717070&name=GP_CL_WG_252_P",
      price: "12"
    }, 
    {
      img: "../../../assets/img/products/washingmachine/intensecleanalata1.jpg",
      title: "Καθαριστικό αλάτων πλυντηρίου ρούχων και πιάτων",
      desc:
        "IntenseClean, Για υγιεινή καθαριότητα σε πλυντήρια πιάτων και πλυντήρια ρούχων ",
      link:
        "https://www.miele.gr/domestic/appliance-service-1821.htm?mat=10717070&name=GP_CL_WG_252_P",
      price: "12"
    }, 

  ];

  constructor() {}

  ngOnInit() {}
}
