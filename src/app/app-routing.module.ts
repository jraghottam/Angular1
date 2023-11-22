import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';

const routes: Routes = 
[
  { path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }