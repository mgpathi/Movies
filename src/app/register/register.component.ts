import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList:any[] = [];

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  constructor() { }

  ngOnInit() {
    this.countryList.push({id:'IND',name:"India"},{id:'SWZ',name:"Switzerland"},{id:'GER',name:"Germany"},{id:'NED',name:"Netherland"})
  }

  onSubmit() {
    console.log(this.contactForm.value);
    alert("User registration completed, please login.");
  }


}
