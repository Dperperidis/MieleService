import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  employee: any = {}

  constructor( private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    document.body.style.backgroundImage = "url(../../../../assets/img/immer_besser.jpg)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "auto";
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = '';
  }

  login() {
    this.authService.login(this.employee).subscribe(res =>{
      this.toastr.success("Καλωσήρθες");
      this.router.navigate(["/home"]);
    }, error => {
      this.toastr.error("Email/Κωδικός δεν ταιριάζουν");
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
