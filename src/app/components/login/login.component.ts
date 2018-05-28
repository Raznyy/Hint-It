import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) 
    { 
      this.createForm();
    }

    createForm() {
      this.loginForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['',Validators.required]
      });
    }

    loginGoogle() {
      this.authService.googleLogin();
    }

    loginFacebook() {
      this.authService.facebookLogin();
    }

    emailLogin(value){
      this.authService.emailLogin(value)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  ngOnInit() {
  }

}
