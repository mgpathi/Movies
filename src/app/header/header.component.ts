import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit() {
  }

  signout() {
    this.loginService.isAuthenticated = false;
    sessionStorage.clear();
  }

}
