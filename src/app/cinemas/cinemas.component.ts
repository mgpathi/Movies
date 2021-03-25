import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../commons/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

  constructor(
    private service : CinemaService
  ) { }

  ngOnInit() {
  }

  gotService() {
    console.log("Inside of gotService..!");
    this.service.getCinemaData().subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  getCaptcha() {
    this.service.getCaptcha().subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

}
