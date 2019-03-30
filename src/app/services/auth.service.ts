import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { SessionService } from './session.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url: string;
  _currentUser: User;

  constructor(private http: HttpClient,
    private router: Router,
    private sessionService: SessionService) {
    this._url = environment.APIUrl;
  }

  authenticate(login: Login) {
    console.log('Inside service');
    this.http.post(this._url + '/auth/login', login, {
      headers: this.setHeaders()
    }).subscribe(response => {
      console.log('Valid login');

      var _userData = JSON.parse(JSON.stringify(response));
      this._currentUser = new User;
      this._currentUser.UserName = _userData.username;
      this._currentUser.Token = _userData.token;
      this._currentUser.Role = _userData.role;

      this.sessionService.setUserSession(this._currentUser);
      this.router.navigate(['dashboard']);
    }, err => {
      console.log('Invalid login');
    });
  }

  logout() {
    this.sessionService.endUserSession();
  }

  register(user:User) {
    localStorage.removeItem('currentUser');
  }

  setHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

}
