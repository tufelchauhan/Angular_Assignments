import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './employee/addemployee/addEmployee.component';
import { EmployeelistComponent } from "./employee/employeelist/employeelist.component";
import { EmployeeService } from './employee/employee.service';
import { RouterModule } from '@angular/router';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeelistComponent,
    EditemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path : 'employeelist', component : EmployeelistComponent},
      { path : 'addemployee', component : AddEmployeeComponent},
      { path : 'editemployee/:index', component : EditemployeeComponent}
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
