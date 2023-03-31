import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private readonly fb: FormBuilder, private router: Router) {}

  initForm(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (
      this.loginForm.get('username').value === 'nam' &&
      this.loginForm.get('password').value === 'linh'
    ) {
      localStorage.setItem('token', 'lovelinhforever');
      this.router.navigate(['/dashboard']);
    }
  }
}
