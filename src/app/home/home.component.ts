import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { 
    // document.body.style.backgroundImage = "url(../../../../assets/img/Homeback.jpg)";
    // document.body.style.backgroundAttachment = "fixed";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.height = "auto";
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    //document.body.style.backgroundImage = '';
  }
}
