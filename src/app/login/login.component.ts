import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

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
    const appInsights = new ApplicationInsights({ config: {
      //instrumentationKey: 'YOUR_INSTRUMENTATION_KEY_GOES_HERE'
      /* ...Other Configuration Options... */
      instrumentationKey:'a3747ae2-4443-47dd-90d3-1012e9482c5d',
     // ingestionEndpoint : 'https://southcentralus-0.in.applicationinsights.azure.com/'
    } });
    appInsights.loadAppInsights();
    appInsights.trackPageView(); 
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
    this.loginService.loginUser().subscribe((res:any)=>{
      console.log("Inside of success");
    },(error:any)=>{
      console.log("Inside of Error");
    });
    //this.router.navigate(['/cinemas']);
  }

}
