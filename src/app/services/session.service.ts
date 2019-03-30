import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: User;
  constructor() { }
  setUserSession(user: User) {
    localStorage.setItem('user', user.UserName);
    localStorage.setItem('token', user.Token);
    localStorage.setItem('role', user.Role);

  }

  getUserSession() {
    this.user = new User;
    this.user.UserName = localStorage.getItem('user');
    this.user.Token = localStorage.getItem('token');
    this.user.Role = localStorage.getItem('role');
    return this.user;
  }

  getCurrentUser(){
    return localStorage.getItem('user');
  }

  getSessionToken(){
    return localStorage.getItem('token');
  }

  getCurrentUserRole(){
    return localStorage.getItem('role');
  }

  endUserSession(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
