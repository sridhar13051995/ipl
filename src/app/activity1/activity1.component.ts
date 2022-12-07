import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {
  profileForm: FormGroup;
  initialData: any;
  userData: {firstName:string,experience: Number,type: string}[] = []; 
  constructor() { }

  

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      experience: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      type: new FormControl('',Validators.required)
    });

    this.initialData = {
      firstName: "Sachin",
      experience: "9",
      type: "Regular"     
    };
    this.profileForm.setValue(this.initialData);

    this.userData.push({ firstName: 'Employee1', experience: 5, type: 'Regular' });
    this.userData.push({ firstName: 'Employee2', experience: 6, type: 'Contract' });

  }

  get firstName() { return this.profileForm.get('firstName'); }

  get experience() { return this.profileForm.get('experience'); }

  get type() { return this.profileForm.get('type'); }

  AddEmployee()
  {
    
    console.log(this.firstName.valid);    
    this.userData.push(this.profileForm.value)
    this.profileForm.reset()
  }

  RemoveEmployee(i: number)
  {
    this.userData.splice(i,1)
  }

}
