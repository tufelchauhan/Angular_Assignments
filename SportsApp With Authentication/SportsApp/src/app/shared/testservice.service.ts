import { Injectable } from '@angular/core';
import { Test } from './test.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Testdetail } from './testdetails.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Testservice {
  formData:Test;
  readonly rootURL='https://localhost:44359/api/';
  list :Testdetail[];

  constructor(private http:HttpClient,private router: Router) {
   }

  PostTest(formData:Test){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    return this.http.post(this.rootURL+'Tests',this.formData,{headers : tokenHeader});
  }

  GetTests(){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    this.http.get(this.rootURL+'Tests',{headers : tokenHeader})
    .toPromise()
    .then(res => this.list = res as Testdetail[]);
  }

  DeleteTest(TestId){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')});
    this.http.delete(this.rootURL+'Tests/'+TestId,{headers : tokenHeader}).subscribe(
      res=>{
        this.router.navigate(['/test']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
