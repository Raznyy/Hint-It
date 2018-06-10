import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Injectable()
  export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private afAuth: AuthService,
                public snackBar: MatSnackBar) { }
  
    canActivate() {
      if(this.afAuth.isLoggedIn() ) {
        return true;
      }
      this.router.navigate(['/login']).then(() => {
        this.snackBar.open("Zaloguj się aby zobaczyć swój profil.", "Ok", {
          duration: 5000, 
        });
      });
      return false;
    }
  }