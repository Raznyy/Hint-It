import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms'
import { AnswerDraft } from '../../../model/interfaces';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  @Input() questionKey: string;

  answerModel: AnswerDraft; 
  userUID: string;
  isLogged: boolean;

  constructor(public db: DatabaseService , public authService:AuthService ) 
  {

    this.isLogged = this.authService.isLoggedIn();
    if( this.isLogged )
    {
      this.userUID = this.authService.getUserUID();
    }

    this.answerModel = 
    {
      content: ""
    };
  }

  ngOnInit() 
  {
  }

  respond( form:NgForm )
  {
    this.db.createAnswer( this.questionKey, this.answerModel.content, this.userUID, this.authService.getUserName() );
    this.answerModel = 
    {
      content: ""
    };
    form.reset();
  }

}
