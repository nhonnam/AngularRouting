import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  loginForm: any;

  constructor(private readonly fb: FormBuilder) {
    
  }

  initForm(): void{
    this.loginForm = this.fb.group({
      username:[''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
