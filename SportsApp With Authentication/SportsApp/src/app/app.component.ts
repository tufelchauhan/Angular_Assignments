import { Component } from '@angular/core';
import { longStackSupport } from 'q';
import { UserService } from './shared/user.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsApp';
  
  constructor(private service : UserService,private router:Router) {
  }
  onLogout(){
    this.service.logout();
  }
}
