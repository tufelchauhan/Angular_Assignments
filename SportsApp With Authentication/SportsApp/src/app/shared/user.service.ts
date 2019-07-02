import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootURL='https://localhost:44359/api/';
  public showButton: boolean = true;

  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router) { }

  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.email],
    FullName:[''],
    Passwords: this.fb.group({
      Password:['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword:['']},
      {validator:this.comparePasswords}) 
  });

  comparePasswords(fb:FormGroup)
  {
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    if(confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors){
        if(fb.get('Password').value != confirmPasswordCtrl.value)
          confirmPasswordCtrl.setErrors({passwordMismatch: true})  ;
        else
          confirmPasswordCtrl.setErrors(null);
    }
  }

  register(){
    var body = {
      UserName : this.formModel.value.UserName,
      Email : this.formModel.value.Email,
      FullName : this.formModel.value.FullName,
      Password : this.formModel.value.Passwords.Password,
    }
    return this.http.post(this.rootURL+'ApplicationUser/Register',body);
  }

  login(formData){
    return this.http.post(this.rootURL+'ApplicationUser/Login',formData);
  }

  logout(){
    localStorage.removeItem('token');
    //alert("logout called");
    //alert(localStorage.getItem('token'));
    this.showButton=true;
    this.router.navigate(['/login']);
  }
}
