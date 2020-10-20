import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {NgbDateStruct, NgbDate, NgbCalendar, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component-forms',
  templateUrl: './component-forms.component.html',
  styleUrls: ['./component-forms.component.scss']
})
export class ComponentFormsComponent implements OnInit {
	typeahead: string = '';
	datalist = ['Cat', 'Dog', 'Bear', 'Bird'];
	rating;
	time = '';
	date: NgbDateStruct;
	minDate: NgbDate;
	maxDate: NgbDate;
	today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
	let now = new Date();
	let min = new Date(now);
	min.setDate(min.getDate() - 5);
	this.minDate = NgbDate.from({year: min.getFullYear(), month: min.getMonth() + 1, day: min.getDate()});
	let max = new Date(now);
	max.setDate(max.getDate() + 5);
	this.maxDate = NgbDate.from({year: max.getFullYear(), month: max.getMonth() + 1, day: max.getDate()});
  }
  
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? this.datalist.slice(0, 10)
        : this.datalist.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
