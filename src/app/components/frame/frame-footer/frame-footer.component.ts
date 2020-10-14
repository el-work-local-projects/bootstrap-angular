import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-footer',
  templateUrl: './frame-footer.component.html',
  styleUrls: ['./frame-footer.component.scss']
})
export class FrameFooterComponent implements OnInit {

	now: Date;

  constructor() { 
	this.now = new Date();
  }

  ngOnInit(): void {
  }

}
