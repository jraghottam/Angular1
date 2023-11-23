import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = 
[
  { path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'user-table', component: UserTableComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
