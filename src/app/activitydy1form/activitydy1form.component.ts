import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-activitydy1form',
  templateUrl: './activitydy1form.component.html',
  styleUrls: ['./activitydy1form.component.css']
})
export class Activitydy1formComponent implements OnInit {
  userDataInput: any = {firstName:null,experience: null,type: "Please Select Employee Type"}; 
  firstNameRequired: boolean = false;
  data:string="";
  experienceRequired: boolean = false;
  experiencePatterValid: boolean = false;
  typeRequired: boolean = false;
  @Output() loadedData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  AddEmployee()
  { 
      
      this.firstNameRequired = (this.userDataInput.firstName == '' || this.userDataInput.firstName == null) ? true : false;
      this.experienceRequired = (this.userDataInput.experience == '' || this.userDataInput.experience == null)? true : false;
      this.experiencePatterValid = (this.userDataInput.experience != '' && this.userDataInput.experience !=null) ?  this.userDataInput.experience.match("^[0-9]*$") ? false : true : false;
      this.typeRequired = (this.userDataInput.type == 'Please Select Employee Type') ? true : false;   

      if(!this.experiencePatterValid && !this.experienceRequired && !this.typeRequired && !this.firstNameRequired)
      {
        //this.loadedData.emit(Object.assign({}, this.userDataInput))
        this.loadedData.emit(this.userDataInput)
        this.userDataInput = {}
      }
  }

  Click(data:string)
  {
    this.data = data;
  }
  ClickType(data:string)
  {
    this.userDataInput.type = data;
  }

}
