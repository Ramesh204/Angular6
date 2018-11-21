import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  id : number;
  employee : Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

  getEmp(id:number){
    console.log(id);
    return this.employeeService.getEmployeeById(id).subscribe(data=>this.employee=data,error=>console.log(error));
  }
}
