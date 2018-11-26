import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee : Employee = new Employee();
  submitted = false;

  
  constructor(private employeeService:EmployeeService,private location:Location) {
    
   }

  

  save(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(data=>console.log(data),error=>console.log(error));
  }

  onSubmit(){
    this.submitted=true;
    
    this.save();
  }

  newEmployee(){
    this.submitted = false;
    this.employee = new Employee();
  }



  ngOnInit() {

  }

  
  goback():void{
    this.location.back();
  }

}
