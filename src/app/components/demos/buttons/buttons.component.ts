import { Component, OnInit } from '@angular/core';
import { CheckboxOption } from '../../../classes/checkbox-option';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

	btnsDisabled: boolean = false;
	buttonTypes: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
	buttonSizes: string[] = ['-sm', '', '-lg'];
	btnToggle: boolean = false;
	btnRadio: string = '';
	btnCbSelected = {
		left: true,
		middle: false,
		right: false
	};
	options: CheckboxOption[] = [
		{text: 'Left', value: 'left'},
		{text: 'Middle', value: 'middle'},
		{text: 'Right', value: 'right'}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
