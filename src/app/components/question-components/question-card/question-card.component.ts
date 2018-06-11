import { Component, OnInit } from '@angular/core';
import { Question } from '../../../model/data.interfaces';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  question: Observable<Question>;
  questionKey: string;

  userUID: string;
  isLogged: boolean;

  constructor( private route: ActivatedRoute, private db: DatabaseService, private authService: AuthService ) 
  {
    this.route.params.subscribe( (params) => {
      // Get question by key
      this.questionKey = params['questionid'];
      this.question = db.getQuestion( this.questionKey )
    });
    this.isLogged = this.authService.isLoggedIn();

    if( this.isLogged )
    {
      this.userUID = this.authService.getUserUID();
    }
  }

  ngOnInit() 
  {
    
  }

  voteUp()
  {
    if( this.isLogged )
    {
      this.db.voteForQuestion( this.questionKey , this.userUID , 'up' )
    }
    else
    {
      this.showSnackbar();
    }
  }

  voteDown()
  {
    if( this.isLogged )
    {
      this.db.voteForQuestion( this.questionKey , this.userUID , 'down' )
    }
    else
    {
      this.showSnackbar();
    }
  }

  showSnackbar()
  {
    this.authService.snackBar.open(
      "Funkcja niedostępna dla niezalogowanych użytkowników. <br> Zaloguj się aby zagłosować.", 
      "Ok", 
      { 
        duration: 3000 
      });
  }

  respond()
  {
    console.log("Tutaj robimy respond - otwieramy component odpowiedzi");
  }

}
