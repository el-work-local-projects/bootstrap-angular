import { Component, OnInit } from '@angular/core';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
	now:Date;
	min:NgbDate;
	max:NgbDate;
	
	date = '';
	disableCal = false;
	time = '';
	disableTime = false;

  constructor() { }

  ngOnInit(): void {
	this.now = new Date();
	let minDate = new Date(this.now);
	minDate.setDate(minDate.getDate() - 5);
	this.min = NgbDate.from({year: minDate.getFullYear(), month: minDate.getMonth() + 1, day: minDate.getDate()});
	let maxDate = new Date(this.now);
	maxDate.setDate(maxDate.getDate() + 5);
	this.max = NgbDate.from({year: maxDate.getFullYear(), month: maxDate.getMonth() + 1, day: maxDate.getDate()});
  }

}
