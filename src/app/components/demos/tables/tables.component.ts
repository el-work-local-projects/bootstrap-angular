import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

	colors = ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	content = [
		{
			id: 1,
			fn: 'No',
			ln: 'Body',
			user: '@nb'
		},
		{
			id: 2,
			fn: 'Some',
			ln: 'Body',
			user: '@sb'
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
