import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

	options = ['Option A', 'Option B', 'Option C'];
	selected = {
		radio: '',
		checkbox: [],
		select: '',
		multiselect: []
	};

  constructor() { }

  ngOnInit(): void {
  }

}
