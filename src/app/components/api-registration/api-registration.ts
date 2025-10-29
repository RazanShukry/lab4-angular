import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthApi } from '../../services/auth-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './api-registration.html',
  styleUrls: ['./api-registration.css']
})
export class ApiRegister {
  registerForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authApi: AuthApi, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9\\-\\+]{9,15}$')]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    const user = {
      email: this.f['email'].value,
      username: this.f['username'].value,
      password: this.f['password'].value,
      name: {
        firstname: this.f['firstname'].value,
        lastname: this.f['lastname'].value
      },
      phone: this.f['phone'].value
    };

    this.authApi.registerUser(user).subscribe({
      next: (res) => {
        console.log('User registered:', res);
        this.successMessage = 'Registration successful! Redirecting to login...';
        this.errorMessage = '';

        setTimeout(() => this.router.navigate(['/api-login']), 2000);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    });
  }

  resetForm() {
    this.registerForm.reset();
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
  }
}
