import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerForm: FormGroup;

  constructor(public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) 
    {
      this.createForm();
    }

    createForm() {
      this.registerForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['',Validators.required]
      });
    }

    emailRegister(value){
      this.authService.emailSignup(value)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  ngOnInit() {
  }

}
