import { Component, OnInit, ViewChild } from '@angular/core';
import { Testresult } from '../shared/testresult.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Testresultservice } from '../shared/testresultservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editathlete',
  templateUrl: './editathlete.component.html',
  styleUrls: ['./editathlete.component.css']
})
export class EditathleteComponent implements OnInit {
  TestId;
  TestResultId;
  TestDate;
  TestType;
  constructor(private route : ActivatedRoute,private service : Testresultservice,private router: Router) { 
    this.route.params.subscribe(params => {
      this.TestId=params['tid'];
      this.TestResultId=params['trid'];
      this.TestDate = params['date'];
      this.TestType = params['type'];
    });
    this.service.formData = {
      TestResultId:this.TestResultId,
      AthleteName:'',
      TestId:this.TestId,
      Distance:0,
      Rating:'Below Average'
    }
  }

  ngOnInit() {
    this.service.GetTestResults(this.TestId);
  }

  onSubmit(form:NgForm){
    this.service.PutTestResult(form.value,this.TestId,this.TestDate,this.TestType);
  }

  onDelete(){
    if(confirm("Do you want to delete this athlete from the test"))
      this.service.DeleteTestResult(this.TestResultId,this.TestId,this.TestDate,this.TestType);
  }
}
