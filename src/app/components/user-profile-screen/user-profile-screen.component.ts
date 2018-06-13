import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { User, Question, Answer } from '../../model/data.interfaces';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.css']
})

export class UserProfileScreenComponent implements OnInit {

  
  user: Observable<User>;
  userId: string;

  question: Observable<Question>;
  questionKey: string;

  userUID: string;
  isLogged: boolean;

  

  constructor(public authService: AuthService, public afAuth: AngularFireAuth,private db: DatabaseService,private route: ActivatedRoute,) {
   
    
    this.route.params.subscribe( (params) => {
      this.userId = authService.getUserUID();
      this.user = db.getUser(this.userId)
    });



    this.route.params.subscribe( (params) => {
      this.questionKey = params['questionid'];
      this.question = db.getQuestion( this.questionKey )
    });
   
   
  }

  ngOnInit() 
  {
  }

  signOut() {
    this.authService.logout();
  }

}
