import { Component, OnInit } from '@angular/core';
import { Question, Answer } from '../../../model/data.interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  questionKey: string;

  answers: Observable<Answer[]>;
  answer: Observable<Answer>;

  userUID: string;
  isLogged: boolean;

  constructor( private route: ActivatedRoute, private db: DatabaseService, private authService: AuthService ) 
  { 
    this.route.params.subscribe( (params) => {
      // Get question by key
      this.questionKey = params['questionid'];
    });
    
    // get question answers
    this.answers = this.db.getQuestionAnswers( this.questionKey );

    this.isLogged = this.authService.isLoggedIn();
  }

  ngOnInit() 
  {

  }

}
