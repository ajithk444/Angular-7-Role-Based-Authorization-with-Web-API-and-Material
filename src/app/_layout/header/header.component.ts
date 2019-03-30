import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor(private sessionService: SessionService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    var user = this.sessionService.getCurrentUser();
    if (user != null) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.sessionService.endUserSession();
    this.snackBar.open("Logged out", "", { duration: 3 * 1000 });
    this.router.navigate(['']);
    this.isLoggedIn = false;
  }

}
