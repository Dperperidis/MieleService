import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder,
     private authService: AuthService, 
     private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm = this.fb.group(
      {    firstname: ["", [
        Validators.required,
        ]
       ],
       email: ["", [
        Validators.required,
        ]
       ],
       lastname: ["", [
        Validators.required,
        ]
       ],
       password: ["", [
        Validators.required,
      ]
    ],
    confirmPassword: ["", Validators.required],
        isAdmin: [false]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register() {
    if(this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(res => {
        this.toastr.success("Ο χρήστης δημιουργήθηκε");
        this.router.navigate(['/home']);
      
      }, error => {
        this.toastr.error('Υπάρχει ήδη λογαριασμός με αυτό το email');
        console.log(error);
      }, () => {
        this.authService.login(this.user).subscribe(next => {
          this.router.navigate(['/home']);
        })
      })

    }
  }
}
