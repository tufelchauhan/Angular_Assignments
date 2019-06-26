import { Component, OnInit } from '@angular/core';
import { Testservice } from '../shared/testservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private service:Testservice) {
   }
  
   ngOnInit() {
    this.service.GetTests();
  }
  
}
