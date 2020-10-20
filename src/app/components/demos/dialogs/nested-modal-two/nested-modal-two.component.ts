import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nested-modal-two',
  templateUrl: './nested-modal-two.component.html',
  styleUrls: ['./nested-modal-two.component.scss']
})
export class NestedModalTwoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
