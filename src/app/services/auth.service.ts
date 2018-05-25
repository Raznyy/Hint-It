import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

//ustawienie logowania jako popup dla fb,google
private oAuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider);
}

//rejstracja poprzez email
emailSignup(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      console.log('Konto zostało stworzone', res);
      this.router.navigateByUrl('/profile');
    }, err => reject(err))
  })
}

//logowanie poprzez email
emailLogin(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
      console.log('Zalogowano');
      this.router.navigateByUrl('/profile');
    }, err => reject(err))
  })
}

//wylogowanie
logout() {
  this.afAuth.auth.signOut()
  .then((res) => {
    console.log("Wylogowano");
    this.router.navigate(['/']);
  }, (error) => {
    console.log("Błąd: ", error);
  });
}

//logowanie poprzez Facebook
facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  return this.oAuthLogin(provider)
    .then(value => {
      console.log('Zalogowano przez Facebook', value),
        this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Błąd: ', error);
    });
}

//logowanie poprzez Google
googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return this.oAuthLogin(provider)
    .then(value => {
      console.log('Zalogowano przez Google', value),
        this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Błąd: ', error);
    });
}
}

