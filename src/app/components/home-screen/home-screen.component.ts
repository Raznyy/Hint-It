import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Question } from '../../model/data.interfaces';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  private questions: Observable<Question[]>;
  private userQuestions: Observable<Question[]>;

  constructor(public db: DatabaseService, public afAuth: AngularFireAuth) {
    // this.questions = db.questions;
    this.questions = db.getQuestions(10, "timestamp", "ASC");
    this.userQuestions = db.getUserQuestions(this.afAuth.auth.currentUser.uid);
  }

  ngOnInit() {
  }

  create(){
    this.db.createQuestion("moc"+Math.random(), "kasza", this.afAuth.auth.currentUser.uid).then( ()=>{
      console.log("Question created!");
    });
  }

  load(){
    this.questions = this.db.getQuestions(5, "timestamp", "DESC");
    // this.db.getQuestions().then( function(){
    //   // console.log(this);
    // });
  }

}
