import { Injectable } from '@angular/core';
import { Testresult } from './testresult.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Testresultservice{

  formData:Testresult;
  readonly rootURL='https://localhost:44359/api/';
  list :Testresult[];

  constructor(private http:HttpClient,private router: Router) { }

  PostTestResult(formData:Testresult){
    return this.http.post(this.rootURL+'TestResults',this.formData);
  }
  
  GetTestResults(TestId){
    this.http.get(this.rootURL+'TestResults/'+TestId)
    .toPromise()
    .then(res => this.list = res as Testresult[]);
  }

  PutTestResult(formData:Testresult,TestId,TestDate,TestType) {
    this.http.put(this.rootURL+'TestResults/'+this.formData.TestResultId,this.formData).subscribe(
      res=>{
        this.router.navigate(['/testresult',TestId,TestDate,TestType]);
      },
      err=>{
        console.log(err);
      }
    );
  }

  DeleteTestResult(TestResultId,TestId,TestDate,TestType){
    this.http.delete(this.rootURL+'TestResults/'+TestResultId).subscribe(
      res=>{
        this.router.navigate(['/testresult',TestId,TestDate,TestType]);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
