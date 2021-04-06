import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrapmodal',
  templateUrl: './bootstrapmodal.component.html',
  styleUrls: ['./bootstrapmodal.component.css']
})
export class BootstrapmodalComponent implements OnInit {

  @Input() fromParent : any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.fromParent);
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
