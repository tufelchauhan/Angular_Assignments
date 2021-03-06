import { Injectable } from '@angular/core';
import { Test } from './test.model';
import { HttpClient } from "@angular/common/http";
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
    return this.http.post(this.rootURL+'Tests',this.formData);
  }

  GetTests(){
    this.http.get(this.rootURL+'Tests')
    .toPromise()
    .then(res => this.list = res as Testdetail[]);
  }

  DeleteTest(TestId){
    this.http.delete(this.rootURL+'Tests/'+TestId).subscribe(
      res=>{
        this.router.navigate(['/test']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
