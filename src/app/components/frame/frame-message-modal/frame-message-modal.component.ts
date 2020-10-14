import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { cloneDeep } from 'lodash';
import { Message } from '../../../classes/message';

@Component({
  selector: 'app-frame-message-modal',
  templateUrl: './frame-message-modal.component.html',
  styleUrls: ['./frame-message-modal.component.scss']
})
export class FrameMessageModalComponent implements OnInit {

	@Input() messages: Array<Message>;
	messagesCopy: Array<Message>;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
	this.messagesCopy = cloneDeep(this.messages);
  }
  
  get groupedMessages() {
	let grouped = {};
	for (let msg of this.messagesCopy) {
		for (let app of msg.applications) {
			if (!grouped[app]) {
				grouped[app] = [];
			}
			grouped[app].push(msg);
		}
	}
	return grouped;
  }
  
  deleteMessage(msg: Message) {
	this.messagesCopy.splice(this.messagesCopy.indexOf(msg), 1);
  }

  undoDismissals() {
	this.messagesCopy = cloneDeep(this.messages);
  }
}
