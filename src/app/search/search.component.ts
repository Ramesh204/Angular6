import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  empid = 1;
  employee : Employee;

  constructor(private employeeService:EmployeeService,private location:Location) { }

  ngOnInit() {
  }

  getEmp(empid:number){
    console.log(empid);
    return this.employeeService.getEmployeeById(empid).subscribe(data=>this.employee=data,error=>console.log(error));
  }

  goback():void{
    this.location.back();

  }
}
