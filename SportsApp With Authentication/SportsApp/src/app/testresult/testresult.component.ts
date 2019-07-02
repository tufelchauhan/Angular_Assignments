import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Testresultservice } from '../shared/testresultservice.service';
import { Testservice } from '../shared/testservice.service';

@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {

  TestId:number;
  TestDate:string;
  TestType:string;
  constructor(private router : Router,private route : ActivatedRoute,private service : Testresultservice,private service2 : Testservice) {
    this.route.params.subscribe(params => {
      this.TestId = params['id'];
      this.TestDate = params['date'];
      this.TestType = params['type'];
    });
   }

  ngOnInit() {
    this.service.GetTestResults(this.TestId);
  }

  onDelete()
  {
    console.log("delete called");
    this.service2.DeleteTest(this.TestId);
  }

}
