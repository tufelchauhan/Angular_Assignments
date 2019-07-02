import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service : UserService) {
   }

  ngOnInit() {
  }

  onSubmit()
  {
    this.service.register().subscribe(
      (res:any)=>{
        console.log(res);
        if(res.Succeeded){
          this.service.formModel.reset();
        }
        else{
          res.Errors.forEach(element => {
            switch(element.Code){
              case 'DuplicateUserName' :
                alert("Username already exists");
                break;
              
              default:
                alert(element);
                break;
            }
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
  }
}

class Res{
  Succeeded:boolean;
  Errors:any[];
}
