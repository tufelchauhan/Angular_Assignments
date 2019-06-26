import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Testservice } from '../shared/testservice.service';
import { NgForm } from '@angular/forms';
import { Testresultservice } from '../shared/testresultservice.service';

@Component({
  selector: 'app-addathlete',
  templateUrl: './addathlete.component.html',
  styleUrls: ['./addathlete.component.css']
})
export class AddathleteComponent implements OnInit {
  private TestId:number=0;
  private TestDate:string;
  private TestType:string;
  constructor(private service:Testresultservice, private _router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>{
      this.TestId=params["id"];
      this.TestDate=params["date"];
      this.TestType=params["type"];
    });
  }

  ngOnInit() {
   this.resetForm(); 
  }

  resetForm(form?:NgForm){
    this.service.formData = {
      TestResultId:0,
      AthleteName:'',
      TestId:this.TestId,
      Distance:0,
      Rating:'Below Average'
    }
  }

  onSubmit(form:NgForm){
    this.service.PostTestResult(form.value).subscribe(
      res=> {
        this._router.navigate(['/testresult',this.TestId,this.TestDate,this.TestType]);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
