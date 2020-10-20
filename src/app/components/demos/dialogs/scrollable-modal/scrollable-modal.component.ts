import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrollable-modal',
  templateUrl: './scrollable-modal.component.html',
  styleUrls: ['./scrollable-modal.component.scss']
})
export class ScrollableModalComponent implements OnInit {
  repeat: Array<string> = Array(30);

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
