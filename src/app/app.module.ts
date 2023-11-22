import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  bootstrap: [RegisterComponent],
})
export class AppModule {}
