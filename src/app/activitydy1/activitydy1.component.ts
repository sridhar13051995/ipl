import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-activitydy1',
  templateUrl: './activitydy1.component.html',
  styleUrls: ['./activitydy1.component.css']
})
export class Activitydy1Component implements OnInit {
  
  dataFromParent: {firstName:string,experience: string,type: string}[] = [];  
  userDataInput: {firstName:string,experience: string,type: string} = {firstName:null,experience: null,type: "Please Select Employee Type"}; 
  constructor() { }

  ngOnInit(): void {
    this.dataFromParent.push({ firstName: 'Employee1', experience: '5', type: 'Regular' });
    this.dataFromParent.push({ firstName: 'Employee2', experience: '6', type: 'Contract' });
  }

  AddedData(data)
  {
    this.dataFromParent.push(data);
    //this.userDataInput = data;
  }

  

 

}