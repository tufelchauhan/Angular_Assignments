import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestresultComponent,
    AddtestComponent,
    AddathleteComponent,
    EditathleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'test',pathMatch:'full'},
      {path:'test', component:TestComponent},
      {path:'addtest', component:AddtestComponent},
      {path:'testresult/:id/:date/:type', component:TestresultComponent},
      {path:'addathlete/:id/:date/:type', component:AddathleteComponent},
      {path:'editathlete/:trid/:tid/:date/:type', component:EditathleteComponent}
    ])
  ],
  providers: [Testresultservice,Testservice,Testdetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
