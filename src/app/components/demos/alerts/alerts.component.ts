import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

	private _interval;

	types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
	dismissID = 2;
	dismissAlerts = [{id: 1}];
	dismissTime = 8;
	dismissCountdown = 0;
	showStatic = false;
	showToast = true;
	showTimedToast = true;
	toastCount = 0;

    constructor() { }

    ngOnInit(): void {
		// Thanks I hate it (would probably need individual intervals - really want to leave this ticking forever?)
		this._interval = interval(1000);
		this._interval.subscribe(() => this.tickCountdown());
    }
  
    addDismissableAlert() {
		this.dismissAlerts.push({id: this.dismissID++});
	}
	
	countdownChanged(dismissCountdown) {
		this.dismissCountdown = dismissCountdown;
	}
	
	tickCountdown() {
		console.log('ticking');
		if (this.dismissCountdown > 0) {
			this.dismissCountdown--;
		}
	}
	
	resetCountdown() {
		this.dismissCountdown = 0;
	}
	
	showDismissalAlert() {
		this.dismissCountdown = this.dismissTime;
	}
	
	toggleStaticAlert() {
		this.showStatic = !this.showStatic;
	}

}
