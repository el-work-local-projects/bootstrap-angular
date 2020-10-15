import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

	types: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  constructor() { }

  ngOnInit(): void {
  }

}
