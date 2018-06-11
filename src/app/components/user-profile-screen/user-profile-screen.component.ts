import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.css']
})
export class UserProfileScreenComponent implements OnInit {

  private profile;

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) {
    this.profile = {
      id: 1,
      name: 'CrazySreve69',
      description: 'Nothing to do here though',
      photo: 'https://goo.gl/2ENX3w',
      points: 10,
      tags: ['food','sex','parks'],
      posts: [ 15, 5 , 10 ]
    };
  }

  ngOnInit() 
  {
    // 1. Sprawdzenie czy użytkownik to aktualnie zalogowany czy obcy
    // 2. Pobranie danych profilu
  }

  signOut() {
    this.authService.logout();
  }

}
