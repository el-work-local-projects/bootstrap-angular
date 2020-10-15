import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	activeTab = 1;
	breadcrumbs2 = ['Home', 'Active'];
	breadcrumbs3 = ['Home', 'Library', 'Active'];
	activeCrumb = 'Active';
	compBreadcrumbs = [
		{
			text: 'Home',
			href: '#'
		},
		{
			text: 'Library',
			to: { name: 'Navigation' }
		},
		{
			text: 'Active',
			href: '#',
			active: true
		}
	];
	pages = [1, 2, 3];
	activePage = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
