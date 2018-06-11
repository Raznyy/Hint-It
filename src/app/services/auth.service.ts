import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public snackBar: MatSnackBar
  ) { 
    this.user = afAuth.authState;

      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
          }
          else {
            this.userDetails = null;
          }
        }
);
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  
    getUserUID(): string
    {
      return this.userDetails.uid;
    }


//ustawienie logowania jako popup
private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider);
}

//rejstracja poprzez email
emailSignup(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      console.log('Konto zostało stworzone', res);
      this.router.navigate(['/profile']).then(() => {
        this.snackBar.open("Konto zostało zarejestrowane. Zalogowano.", "Ok", {
          duration: 3000,
        });
      });
    }, err => 
    this.snackBar.open("Wystąpił błąd podczas rejestracji, spróbuj ponownie.", "Ok", {
      duration: 5000, 
    }));
  })
}

//logowanie poprzez email
emailLogin(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
      console.log('Zalogowano');
      this.router.navigate(['/profile']).then(() => {
        this.snackBar.open("Zalogowano.", "Ok", {
          duration: 3000,
        });
      });
    }, err => 
    this.snackBar.open("Wystąpił błąd logowania, spróbuj ponownie.", "Ok", {
      duration: 5000, 
    }));
  })
}

//wylogowanie
logout() {
  this.afAuth.auth.signOut()
  .then((res) => {
    console.log("Wylogowano");
    this.router.navigate(['/']).then(() => {
      this.snackBar.open("Wylogowano.", "Ok", {
        duration: 3000,
      });
    });
  }, (error) => {
    console.log("Błąd: ", error);
    this.snackBar.open("Wystąpił błąd podczas wylogowania, spróbuj ponownie.", "Ok", {
      duration: 5000, 
    });
  });
}

//logowanie poprzez Facebook
facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return this.oAuthLogin(provider)
    .then(value => {
      console.log('Zalogowano przez Facebook', value),
      this.router.navigate(['/profile']).then(() => {
        this.snackBar.open("Zalogowano.", "Ok", {
          duration: 3000,
        });
      });
    })
    .catch(error => {
      console.log('Błąd: ', error);
      this.snackBar.open("Wystąpił błąd logowania, spróbuj ponownie.", "Ok", {
        duration: 5000, 
      });
    });
}

//logowanie poprzez Google
googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return this.oAuthLogin(provider)
    .then(value => {
      console.log('Zalogowano przez Google', value),
      this.router.navigate(['/profile']).then(() => {
        this.snackBar.open("Zalogowano.", "Ok", {
          duration: 3000,
        });
      });
    })
    .catch(error => {
      console.log('Błąd: ', error);
      this.snackBar.open("Wystąpił błąd logowania, spróbuj ponownie.", "Ok", {
        duration: 5000, 
      });
    });
    
}
}