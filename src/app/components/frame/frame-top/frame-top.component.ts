import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../classes/user';
import { Message } from '../../../classes/message';
import { FrameMessageModalComponent } from '../frame-message-modal/frame-message-modal.component';

@Component({
  selector: 'app-frame-top',
  templateUrl: './frame-top.component.html',
  styleUrls: ['./frame-top.component.scss']
})
export class FrameTopComponent implements OnInit {

	user: User;
	apps: Array<String>;
	messages: Array<Message>;
	samewindow: boolean;
	
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
	this.user = {
		name: 'dummy'
	};
	this.apps = [
		'ACE Viewer',
		'PCC Operating Report',
		'OASIS Administrator',
		'Shift Log'
	];
	this.messages = [
		{
			type: 'info',
			message: 'Test message 1',
			applications: [
				'EOS Viewer',
				'Shift Log'
			]
		},
		{
			type: 'success',
			message: 'Test message 2',
			applications: [
				'CAFE'
			]
		}
	];
	this.samewindow = false;
  }
  
  open() {
	const modalRef = this.modalService.open(FrameMessageModalComponent);
    modalRef.componentInstance.messages = this.messages;
  }

}
