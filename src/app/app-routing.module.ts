import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employee', component:EmployeeListComponent,canActivate:[LoggedInGuard]},
  {path:'add', component:CreateEmployeeComponent,canActivate:[LoggedInGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
