import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employees : Observable<Employee[]>;

  isDisable = true;  


  constructor(private employeeService:EmployeeService,private location:Location) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.employees = this.employeeService.getEmployeeList();
  }

  deleteEmps(){
   this.employeeService.deleteAllEmployees().
   subscribe(
     data => {
       console.log(data);
       this.reloadData();
     },
     error => console.log('ERROR:'+error)
   ); 


  
  }

  goback():void{
    this.location.back();
  }


deleteEmp(id:number){
this.employeeService.deleteEmployee(id).subscribe(
  data=>{console.log(data);
  this.reloadData();},
  error=>console.log(error));
}  

updateEmp(emp:Employee){
  console.log(emp.empid);
  this.employeeService.updateEmplyoee(emp.empid,emp).subscribe(data=>console.log(data),error=>console.log(error));
}

}
