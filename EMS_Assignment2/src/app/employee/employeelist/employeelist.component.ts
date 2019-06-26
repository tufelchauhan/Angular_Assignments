import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employeemodel/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeList: Employee[];
  lang_arr: string[] = [];
  constructor(private empService : EmployeeService, private activateRoute : ActivatedRoute, private route : Router)  {
  }
  deleteEmployee(tmpEmp: Employee): void {
    if(confirm("Are you sure?"))
      this.empService.deleteEmployee(tmpEmp);
  }
  editEmployee(tmpIndex: number){
    this.route.navigate(['/editemployee',tmpIndex]);
  }
  ngOnInit() {
    this.employeeList = this.empService.getEmployeeDetails();
    for(let i=0;i<this.employeeList.length;i++)
    {
      let tmpstr : string ='';
      for(let j =0;j<this.employeeList[i].languages.length;j++)
      {
        if(this.employeeList[i].languages[j].isEnabled)
          tmpstr += this.employeeList[i].languages[j].name + " ";
      }
      this.lang_arr.push(tmpstr);
    }
  }
}
