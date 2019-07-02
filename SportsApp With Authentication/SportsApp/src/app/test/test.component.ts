import { Component, OnInit } from '@angular/core';
import { Testservice } from '../shared/testservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private service:Testservice,private router: Router) {
   }
  
   ngOnInit() {
    this.service.GetTests();
  }
  
}
