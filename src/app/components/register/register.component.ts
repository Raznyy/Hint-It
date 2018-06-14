import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'username': {
      'required': 'Pole nie może być puste.',
      'minlength': 'Nazwa musi zawierać co najmniej 4 znaków.',
      'maxlength': 'Nazwa nie może zawierać więcej niż 25 znaków.',
    },
    'email': {
      'required': 'Pole nie może być puste.',
      'email': 'Email nie jest poprawny.',
    },
    'password': {
      'required': 'Pole nie może być puste.',
      'pattern': 'Hasło musi zawierac co najmniej jeden znak oraz cyfrę.',
      'minlength': 'Hasło musi zawierać co najmniej 6 znaków.',
      'maxlength': 'Hasło nie może zawierać więcej niż 25 znaków.',
    },
  };

  constructor(public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    public afAuth: AngularFireAuth) 
    {
      this.createForm();
    }

    createForm() {
      this.registerForm = this.fb.group({
        'username': ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25)
        ]],
        'email': ['', [
          Validators.required,
          Validators.email,
        ]],
        'password': ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25),
        ]],
      });
  
      this.registerForm.valueChanges.subscribe((data) => this.onValueChanged(data));
      this.onValueChanged(); 
    }
    onValueChanged(data?: any) {
      if (!this.registerForm) { return; }
      const form = this.registerForm;
      for (const field in this.formErrors) {
        if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            if (control.errors) {
              for (const key in control.errors) {
                if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                  this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
                }
              }
            }
          }
        }
      }
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
