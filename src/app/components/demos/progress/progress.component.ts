import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

	styles = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
	value = 50;
	max = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
