import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() message: string | null;

  userModel: User;
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    subscribe: new FormControl(),
  });



  ngOnInit() {
  }
  submit() {
    //alert('Success :' + JSON.stringify(this.form.value));

    if (this.form.valid) {
      this.userModel = new User;
      this.userModel.UserName = this.form.controls['username'].value;
      this.userModel.Password = this.form.controls['password'].value;
      this.authService.register(this.userModel);
      this.message = 'Registered Successfully';
    }
  }

}
