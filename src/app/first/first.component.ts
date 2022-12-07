import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  clearAlert = false;
  constructor() {}
  ngOnInit(): void {}
  staticAlertClosed= false;
  closeAlert(ctl) {
    this.clearAlert = true;
  }

  closeItem(){

  }
}
