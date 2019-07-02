import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestresultComponent } from './testresult/testresult.component';
import { AddtestComponent } from './addtest/addtest.component';
import { AddathleteComponent } from './addathlete/addathlete.component';
import { EditathleteComponent } from './editathlete/editathlete.component';
import { RouterModule,Routes,Router } from "@angular/router";
import { Testresultservice } from './shared/testresultservice.service';
import { Testservice } from './shared/testservice.service';
import { Testdetail } from './shared/testdetails.model';
import { RegistrationComponent } from "./user/registration/registration.component";
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestresultComponent,
    AddtestComponent,
    AddathleteComponent,
    EditathleteComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'registration',component:RegistrationComponent},
      {path:'test', component:TestComponent,canActivate:[AuthGuard]},
      {path:'addtest', component:AddtestComponent,canActivate:[AuthGuard]},
      {path:'testresult/:id/:date/:type', component:TestresultComponent,canActivate:[AuthGuard]},
      {path:'addathlete/:id/:date/:type', component:AddathleteComponent,canActivate:[AuthGuard]},
      {path:'editathlete/:trid/:tid/:date/:type', component:EditathleteComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers: [Testresultservice,Testservice,Testdetail,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
