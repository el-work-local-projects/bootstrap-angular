import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {

  repeat: Array<string> = Array(3);

  constructor() { }

  ngOnInit(): void {
  }

}
