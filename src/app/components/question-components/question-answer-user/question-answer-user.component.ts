import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, Answer } from '../../../model/data.interfaces';

@Component({
  selector: 'app-question-answer-user',
  templateUrl: './question-answer-user.component.html',
  styleUrls: ['./question-answer-user.component.css']
})
export class QuestionAnswerUserComponent implements OnInit {

  @Input() answer:Observable<Answer>;
  @Input() question:Observable<Question>;

  constructor() { }

  ngOnInit() {
  }

}
