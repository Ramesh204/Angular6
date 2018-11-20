import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  @Input() employee : Employee;

  constructor(private employeeService:EmployeeService,private listComponent:EmployeeListComponent) { }

  ngOnInit() {
  }

  deleteEmp(){
   this.employeeService.deleteEmployee(this.employee.empid).
   subscribe(data=>{console.log(data);
       this.listComponent.reloadData();
     },
     error=>console.log(error));
  }

  
  

  
}
