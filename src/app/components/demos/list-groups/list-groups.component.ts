import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {

	styles = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

  constructor() { }

  ngOnInit(): void {
  }

}
