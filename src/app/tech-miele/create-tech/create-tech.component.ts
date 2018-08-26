import { Component, OnInit } from "@angular/core";
import { User } from "../../_models/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../_services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Technician } from "../../_models/technician";

@Component({
  selector: "app-create-tech",
  templateUrl: "./create-tech.component.html",
  styleUrls: ["./create-tech.component.css"]
})
export class CreateTechComponent implements OnInit {
  technician: Technician;

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      postcode: ["", [Validators.required]],
      area: ["", [Validators.required]],
      address: ["", [Validators.required]],
      specialization: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      areaservice: ["", [Validators.required]]
    });
  }

  create() {
    if (this.registerForm.valid) {
      this.technician = Object.assign({}, this.registerForm.value);
      this.authService.createTech(this.technician).subscribe(res =>{
        this.toastr.success("Τα στοιχεία του τεχνικού καταχωρήθηκαν")
        this.router.navigate(['/mieletech'])
        
      },error => {
        this.toastr.error('Υπάρχει ήδη λογαριασμός με αυτο το email');
        console.log(error);
      })
    }
  }
}
