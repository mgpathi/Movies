import { Component, OnInit } from '@angular/core';
import { BootstrapmodalComponent } from '../commons/bootstrapmodal/bootstrapmodal.component';
import { CinemaService } from '../commons/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
  selDate:any;
  constructor(
    private service : CinemaService,
    //private modalService: NgbModal
    
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

  // openModal() {
  //   const modalRef = this.modalService.open(BootstrapmodalComponent,
  //     {
  //       //scrollable: true,
  //       windowClass: 'myCustomModalClass',
  //       keyboard: false,
  //       backdrop: 'static'
  //     });

  //   let data = {
  //     prop1: 'Some Data',
  //     prop2: 'From Parent Component',
  //     prop3: 'This Can be anything'
  //   }

  //   modalRef.componentInstance.fromParent = data;
  //   modalRef.result.then((result) => {
  //     console.log(result);
  //   }, (reason) => {
  //     console.log(reason);
  //   });
  // }

}
