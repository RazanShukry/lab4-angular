import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthApi } from '../../services/auth-api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-api-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './api-login.html',
  styleUrls: ['./api-login.css']
})
export class ApiLogin {
  loginForm: FormGroup;
  submitted = false;
  loggedInUser: any = null;

  constructor(private fb: FormBuilder, private authService: AuthApi, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.loggedInUser = this.loginForm.value;

      const token = 'dummy-token';
      localStorage.setItem('token', token);
      this.authService.saveToken(token);

      //alert('Login successful! Redirecting to products...');

      setTimeout(() => {
        this.router.navigate(['/api-products']);
      }, 100);
    }
  }

  resetForm() {
    this.loginForm.reset();
    this.submitted = false;
  }
}
