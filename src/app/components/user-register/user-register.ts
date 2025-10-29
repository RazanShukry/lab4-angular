import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.html',
  styleUrls: ['./user-register.css']
})
export class UserRegister {
  registerForm: FormGroup;
  submitted = false;
  registeredUser: any = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      mobiles: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
      ]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  get f() {
    return this.registerForm.controls;
  }

  get mobiles(): FormArray {
    return this.registerForm.get('mobiles') as FormArray;
  }

  addMobile() {
    this.mobiles.push(this.fb.control('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]));
  }

  removeMobile(index: number) {
    if (this.mobiles.length > 1) {
      this.mobiles.removeAt(index);
    }
  }

  passwordMatch(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.registeredUser = this.registerForm.value;
      this.registerForm.reset();
      this.mobiles.clear();
      this.addMobile();
      this.submitted = false;
    }
  }

  resetForm() {
    this.registerForm.reset();
    this.mobiles.clear();
    this.addMobile();
    this.submitted = false;
  }
}
