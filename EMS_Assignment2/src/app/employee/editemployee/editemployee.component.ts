import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employeemodel/employee.model';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  index : number;
  emp : Employee;
  qualification_arr: string[];
  experience_arr: string[];
  languages_obj;
  constructor(private route : Router,private empService : EmployeeService, private activatedroute : ActivatedRoute) { 
    this.index = parseInt(this.activatedroute.snapshot.paramMap.get('index'));
    this.emp = this.empService.getEmployeebyIndex(this.index);
   
    this.languages_obj = [{name:'C/C++',isEnabled:false},{name:'C#',isEnabled:true},{name:'Java',isEnabled:true},{name:'Python',isEnabled:false},{name:'PHP',isEnabled:false}];
  }
  editEmployee():void{
    this.empService.editEmployee(this.emp,this.index);
    this.route.navigate(['/employeelist']);
  }
  checkval(tmp:number) : void{
    this.languages_obj[tmp].isEnabled = !this.languages_obj[tmp].isEnabled;
    this.emp.languages = this.languages_obj;
 }
  ngOnInit() {
    this.qualification_arr = ["10th","12th","BCA","Msc.it"];
    this.experience_arr = ["None","> 6 months", "> 1 year" ,"> 2 years" , "> 5 years", "> 10 years"];
  }
}
