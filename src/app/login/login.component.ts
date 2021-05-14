import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  signin() {
    console.log("Inside of login...!");
    console.log(this.userName);
    console.log(this.password);
    sessionStorage.setItem('user', this.userName);
    this.loginService.isAuthenticated = true;
    setTimeout(function () {
      //sessionStorage.clear();
      
    }, 3000);
    this.router.navigate(['/cinemas']);
  }

}
