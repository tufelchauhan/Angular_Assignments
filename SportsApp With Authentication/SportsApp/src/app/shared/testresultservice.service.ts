import { Injectable } from '@angular/core';
import { Testresult } from './testresult.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    return this.http.post(this.rootURL+'TestResults',this.formData,{headers : tokenHeader});
  }
  
  GetTestResults(TestId){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    this.http.get(this.rootURL+'TestResults/'+TestId,{headers : tokenHeader})
    .toPromise()
    .then(res => this.list = res as Testresult[]);
  }

  PutTestResult(formData:Testresult,TestId,TestDate,TestType) {
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    this.http.put(this.rootURL+'TestResults/'+this.formData.TestResultId,this.formData,{headers : tokenHeader}).subscribe(
      res=>{
        this.router.navigate(['/testresult',TestId,TestDate,TestType]);
      },
      err=>{
        console.log(err);
      }
    );
  }

  DeleteTestResult(TestResultId,TestId,TestDate,TestType){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    this.http.delete(this.rootURL+'TestResults/'+TestResultId,{headers : tokenHeader}).subscribe(
      res=>{
        this.router.navigate(['/testresult',TestId,TestDate,TestType]);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
