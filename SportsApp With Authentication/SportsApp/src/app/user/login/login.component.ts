import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel = {
  UserName:'',
  Password:''
}
  constructor(private service : UserService,private router : Router) {
   }

  ngOnInit() {
    // if(localStorage.getItem("token")!=null)
    //   this.router.navigate(['/test']);
  }

  checkDisabled(){
    if(this.formModel.UserName!='' && this.formModel.Password!='')
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('token',res.token);
        this.service.showButton=false;
        this.router.navigateByUrl('/test');
      },
      err=>{
        if(err.status=400)
          alert("Incorrect Username and Password");
        else
          console.log(err)
      }
    )
  }
}
