import { Component, OnInit } from '@angular/core';
import { Testservice } from '../shared/testservice.service';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(private service:Testservice, private _router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      TestId:0,
      TestDate:'',
      TestType:''
    }
  }

  onSubmit(form:NgForm){
    this.service.PostTest(form.value).subscribe(
      res=> {
        this._router.navigate(['/test']);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
