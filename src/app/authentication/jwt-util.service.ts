import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtUtilService {
  private tokenKey = 'jwt_token';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
