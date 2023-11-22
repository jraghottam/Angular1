import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthenticationRequest } from './models/authentication-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) {}

  login(): void {
    const request: AuthenticationRequest = { username: this.username, password: this.password };
    this.authService.authenticate(request)
      .subscribe(response => {
        console.log('Authentication successful', response);
        // Redirect or perform additional actions on successful login
      });
  }
}
