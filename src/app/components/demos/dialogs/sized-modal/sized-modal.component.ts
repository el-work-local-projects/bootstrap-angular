import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sized-modal',
  templateUrl: './sized-modal.component.html',
  styleUrls: ['./sized-modal.component.scss']
})
export class SizedModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
