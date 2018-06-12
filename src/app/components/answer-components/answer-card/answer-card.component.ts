import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '@firebase/util';
import { Answer } from '../../../model/data.interfaces';
import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.css']
})
export class AnswerCardComponent implements OnInit {

  @Input() answer: Observable<Answer>;
  @Input() isLogged: boolean;
  @Input() questionKey: string;

  userUID: string;
  answerKey: string;

  constructor( private db: DatabaseService, public authService:AuthService ) 
  {
    if( this.isLogged )
    {
      this.userUID = this.authService.getUserUID();
    }   
  }

  ngOnInit() 
  {
    this.answerKey = this.answer['key'];
  }

  voteUp()
  {
    if( this.isLogged )
    {
      this.db.voteForAnswer( this.questionKey , this.answerKey , this.userUID , 'up' )
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
      this.db.voteForAnswer( this.questionKey , this.answerKey , this.userUID , 'down' )
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

}
