import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NestedModalOneComponent } from './nested-modal-one/nested-modal-one.component';
import { ScrollableModalComponent } from './scrollable-modal/scrollable-modal.component';
import { ButtonlessModalComponent } from './buttonless-modal/buttonless-modal.component';
import { SizedModalComponent } from './sized-modal/sized-modal.component';
import { ValidatedModalComponent } from './validated-modal/validated-modal.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

	name = '';
	nameState = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  showNestedModal() {
    this.modalService.open(NestedModalOneComponent);
  }
  
  showLimitedModal() {
    this.modalService.open(ValidatedModalComponent, {
		backdrop: 'static',
		keyboard: false
	});
  }
  
  showSizedModal(size) {
    this.modalService.open(SizedModalComponent, {
		size: size
	});
  }
  
  showScrollableModal() {
    this.modalService.open(ScrollableModalComponent, {
		scrollable: true
	});
  }
  
  showButtonlessModal() {
    this.modalService.open(ButtonlessModalComponent);
  }

}
