// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { User } from 'src/app/models/User';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;

//   loginModel: User;
//   constructor(
//     private router: Router, 
//     private authService: AuthService,
//     private formBuilder: FormBuilder) { }
//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: [''],
//       password: ['']
//     });
// }
// get f() { return this.loginForm.controls; }

//   login() {
//     console.log('login');

//     if (this.loginForm.invalid) {
//       return false;
//     }
//     this.loginModel = new User;
//     this.loginModel.UserName = this.loginForm.get('username').value;
//     this.loginModel.Password = this.loginForm.get('password').value;
//     console.log(this.loginModel.UserName);
//     console.log(this.loginModel.Password);
//     this.authService.authenticate(this.loginModel);
//   }
// }

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/models/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() message: string | null;

  loginForm: FormGroup;
  loginModel: Login;

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  submit() {
    //alert('Success :' + JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.loginModel = new Login;
      this.loginModel.UserName = this.form.controls['username'].value;
      this.loginModel.Password = this.form.controls['password'].value;
      this.authService.authenticate(this.loginModel);
      this.message = 'Success';
    }
  }

  

}

