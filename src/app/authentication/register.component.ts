import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { RegistrationRequest } from './models/registration-request.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = ''; // Assuming you have a 'role' field for registration

  constructor(private authService: AuthenticationService) {}

  register(): void {
    const request: RegistrationRequest = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
    };

    this.authService.register(request)
      .subscribe(response => {
        console.log('Registration successful', response);
        // Redirect or perform additional actions on successful registration
      });
  }
}
