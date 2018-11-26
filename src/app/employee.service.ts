import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  private baseUrl = 'http://localhost:8080/rest/employees';

  constructor(private http:HttpClient) { }

  addEmployee(employee : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl}`+`/add`,employee);
  }

  getEmployeeList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+`/all`);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+`/${id}`);
  }
  
  updateEmplyoee(id:number,value:any):Observable<Object>{
   return this.http.put(`${this.baseUrl}`+`/update`+`/${id}`,value);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}`+`/delete`+`/${id}`,{responseType:'text'});
  }
  
  deleteAllEmployees():Observable<any>{
    return this.http.delete(`${this.baseUrl}`+`/delete/all`,{responseType:'text'});
  }
}
