import { Component, OnInit } from '@angular/core';
import { profile } from '../classes/profile';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {

  profile: profile = {
    id: 1,
    name: 'CrazySreve69',
    description: 'Nothing to do here though',
    photo: 'https://goo.gl/2ENX3w',
    points: 10,
    tags: ['food','sex','parks'],
    posts: [ 15, 5 , 10 ]
  };

  constructor() { }

  ngOnInit() 
  {
    // 1. Sprawdzenie czy użytkownik to aktualnie zalogowany czy obcy
    // 2. Pobranie danych profilu
  }

}
