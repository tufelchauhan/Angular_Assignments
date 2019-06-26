import { Injectable } from '@angular/core';
import { Employee } from './employeemodel/employee.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeeList : Employee[] = [];
  
  constructor(private route : Router) {
  }
  
  addEmployee(tmpEmp : Employee) :void {
    if(this.employeeList.length>0){
      tmpEmp.id=this.employeeList[this.employeeList.length-1].id+1;
    }
    else{
      tmpEmp.id=1;
    }
    this.employeeList.push(tmpEmp);
  }
  deleteEmployee(tmpEmp:Employee): void {
    let index = this.employeeList.indexOf(tmpEmp);
    if(index>=0){
      this.employeeList.splice(index,1);
    }
    else{
      alert("Error! Employee doesn't exists");
    }
    this.route.navigate(['/productlist']);
  }
  editEmployee(tmpEmp: Employee, index: number) : void {
    this.route.navigate(['/employeelist']);
  }
  getEmployeebyIndex(tmpIndex : number): Employee {
    return this.employeeList[tmpIndex];
  }
  getEmployeeDetails() : Employee[]{
    return this.employeeList;
  }
}
