import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-log-in-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './log-in-form.html',
  styleUrls: ['./log-in-form.css'],
})
export class LogInForm {
  duringAnimation = false;
  error = false;

  formData = new FormGroup({
    username: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }),
  });

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {

  }

  submitForm(event: Event) {
    event.preventDefault();
    const elementForAnimation = document.getElementById('logInFormHolder');

    if(this.formData.invalid){
      this.formData.markAllAsTouched();
      elementForAnimation?.classList.add('shakeOnError');
      this.duringAnimation = true;
      setTimeout(() => {
        elementForAnimation?.classList.remove('shakeOnError');
        this.duringAnimation = false;
      }, 500);
    }else{
      this.userService.fetchUser().subscribe({
        next: response => {
          localStorage.setItem("user", JSON.stringify(response))
          this.router.navigate(['/welcome']);
          this.authService.loggedInUser(true)
        },
        error: error => {
          console.error(error)
        }
      })
    }
      
  }
}
