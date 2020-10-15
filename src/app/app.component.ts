import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	mode: string = 'text';
	modeOptions: Array<string> = [
		'text',
		'labels',
		'buttons',
		'tables',
		'forms',
		'navigation',
		'alerts',
		'time-selection',
		'progress',
		'list-groups',
		'dialogs',
		'containers'
	];
	
    constructor(public router: Router) { }
	
	goToView(view) {
		this.mode = view;
		this.router.navigate([view], {});
	}
}
