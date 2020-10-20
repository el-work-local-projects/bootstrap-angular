import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NestedModalTwoComponent } from '../nested-modal-two/nested-modal-two.component';

@Component({
  selector: 'app-nested-modal-one',
  templateUrl: './nested-modal-one.component.html',
  styleUrls: ['./nested-modal-one.component.scss']
})
export class NestedModalOneComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  open() {
    this.modalService.open(NestedModalTwoComponent, {});
  }

}
