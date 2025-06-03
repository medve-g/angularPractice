import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  storedUser: string | null = null;
  currentUser: User| null = null;

  constructor(private authService: AuthService) {
    
  }
  ngOnInit(): void {
    this.storedUser = localStorage.getItem("user");
    if (this.storedUser) {
      this.currentUser = JSON.parse(this.storedUser);
    }
  }

  logOut(): void{
    this.storedUser = null;
    this.currentUser = null;
    localStorage.removeItem("user");
    this.authService.loggedInUser(false);
  }
}
