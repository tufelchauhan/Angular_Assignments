import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { empty } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp:Employee = new Employee();
  qualification_arr: string[];
  experience_arr: string[];
  languages_obj;
  languages_selected: string[];
  tick : boolean = true;
  constructor() {
   }
   checkval(tmp:number) : void{
     this.languages_obj[tmp].isEnabled = !this.languages_obj[tmp].isEnabled;
     this.emp.languages = this.languages_obj;
     alert(this.emp.languages[0].isEnabled + " "+this.emp.languages[1].isEnabled + " "+this.emp.languages[2].isEnabled + " "+this.emp.languages[3].isEnabled + " "+this.emp.languages[4].isEnabled);
   }
  ngOnInit() {
    this.qualification_arr = ["10th","12th","BCA","Msc.it"];
    this.experience_arr = ["None","> 6 months", "> 1 year" ,"> 2 years" , "> 5 years", "> 10 years"];
    this.languages_obj = [{name:'C/C++',isEnabled:false},{name:'C#',isEnabled:true},{name:'Java',isEnabled:true},{name:'Python',isEnabled:false},{name:'PHP',isEnabled:false}]
    this.emp.languages = this.languages_obj;
  }

  display_details(): void {
    console.log("Employee Details : ");
    console.log("First Name : " + this.emp.firstName);
    console.log("Last Name : " + this.emp.lastName);
    console.log("Email : " + this.emp.email);
    console.log("Contact Number : " + this.emp.contact);
    console.log("Address : " + this.emp.address);
    console.log("User Name : " + this.emp.username);
    console.log("Password : " + this.emp.password);
    console.log("Gender : " + this.emp.gender);
    console.log("Qualification : " + this.emp.qualification);
    console.log("Experience : " + this.emp.experience);
    console.log("Coding Languages : ");
    let i: number;
     for(i=0;i<this.emp.languages.length;i++) {
        if(this.emp.languages[i].isEnabled === true){
            console.log("    "+this.emp.languages[i].name);
        }
     }
}
}
