import { Component, AfterViewChecked , OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activit-day1',
  templateUrl: './activit-day1.component.html',
  styleUrls: ['./activit-day1.component.css']
})
export class ActivitDay1Component implements OnInit  {
  userData: {firstName:string,experience: Number,type: string}[] = []; 
  initialData: any;
  @ViewChild('profileForm') profileForm: NgForm;
  // @ViewChild('firstName') firstName : ElementRef;
  constructor() { }

  ngOnInit(): void {

    this.initialData = {
      firstName: "Sachin",
      experience: "9",
      type: "Regular"     
    };

    this.userData.push({ firstName: 'Employee1', experience: 5, type: 'Regular' });
    this.userData.push({ firstName: 'Employee2', experience: 6, type: 'Contract' });

    

   
  }

  AddEmployee(formData: NgForm)
  {  
    this.userData.push(formData.value)
    formData.reset()
  }

  // ngAfterViewChecked()
  // {
  //   this.profileForm.setValue(this.initialData);
  // }
  // AddEmployee(formData: NgForm, firstName: ElementRef)
  // {  
  //   console.log(formData)  
  //   console.log('Data form chil')
  //   console.log(this.firstName.nativeElement.value);
    
  // console.log(firstName)
  //   this.userData.push(formData.value)
  //   formData.reset()
  // }


  RemoveEmployee(i: number)
  {
    this.userData.splice(i,1)
  }

}
