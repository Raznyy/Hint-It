import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.css']
})
export class UserProfileScreenComponent implements OnInit {

  private profile;

  constructor() {
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

}
