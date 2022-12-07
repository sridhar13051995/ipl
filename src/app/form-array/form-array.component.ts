import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  todoForm: FormGroup;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      ToDoData: new FormControl('',Validators.required),
      list: new FormArray([])     
    });
  }

  get list() : FormArray {
    return this.todoForm.get("list") as FormArray
  }
  get ToDoData() : FormControl {
    return this.todoForm.get("ToDoData") as FormControl
  }

  add()
  {
    console.log("sridhar "+this.ToDoData.value);
      this.list.push(new FormControl(this.ToDoData.value));
      this.todoForm.patchValue({  
        ToDoData: ''});    
        this.todoForm.get('firstName').markAsUntouched();   
  }

  remove(index)
  {
    this.list.removeAt(index)
  }

}
