import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,
              public authService: AuthService,) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
  }
}
