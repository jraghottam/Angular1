import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtUtilService } from './jwt-util.service';
import { AuthenticationRequest } from './models/authentication-request.model';
import { AuthenticationResponse } from './models/authentication-response.model';
import { RegistrationRequest } from './models/registration-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private jwtUtilService: JwtUtilService
  ) {}

  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, request)
      .pipe(
        tap(response => {
          if (response && response.token) {
            this.jwtUtilService.setToken(response.token);
          }
        })
      );
  }

  register(request: RegistrationRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, request);
  }
}
