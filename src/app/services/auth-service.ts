import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      this.isLoggedIn = true
    }

  }

  loggedInUser(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
  }
}
