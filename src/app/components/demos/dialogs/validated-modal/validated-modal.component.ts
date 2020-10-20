import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validated-modal',
  templateUrl: './validated-modal.component.html',
  styleUrls: ['./validated-modal.component.scss']
})
export class ValidatedModalComponent implements OnInit {

  name: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  submitForm() {
	if (this.name) {
		this.activeModal.close(this.name);
	}
  }

}
