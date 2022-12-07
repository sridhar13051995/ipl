import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activitydy1list',
  templateUrl: './activitydy1list.component.html',
  styleUrls: ['./activitydy1list.component.css']
})
export class Activitydy1listComponent implements OnInit {
  @Input() userData: {firstName:string,experience: string,type: string}[] = [];  
  
  constructor() { }

  ngOnInit(): void {    
  }
  RemoveEmployee(i: number)
  {
    this.userData.splice(i,1)
  }

}
