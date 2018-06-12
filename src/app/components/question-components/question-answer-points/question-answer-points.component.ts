import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../../model/data.interfaces';

@Component({
  selector: 'app-question-answer-points',
  templateUrl: './question-answer-points.component.html',
  styleUrls: ['./question-answer-points.component.css']
})
export class QuestionAnswerPointsComponent implements OnInit {

  constructor() { }

  @Input() question: Observable<Question>;
  @Input() answer: Observable<Question>; 

  @Output() upVote: EventEmitter<any> = new EventEmitter();
  @Output() downVote: EventEmitter<any> = new EventEmitter();

  ngOnInit() 
  {
  }

  vote( voteType: String )
  {
    if ( voteType == 'up' ) 
    {
      this.upVote.emit(null);
    } 
    else if ( voteType == 'down' )
    {
      this.downVote.emit(null);
    }
  }

}
