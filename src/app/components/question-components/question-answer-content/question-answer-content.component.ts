import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer } from '../../../model/data.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-answer-content',
  templateUrl: './question-answer-content.component.html',
  styleUrls: ['./question-answer-content.component.css']
})
export class QuestionAnswerContentComponent implements OnInit {

  @Input() question:Observable<Question>;
  @Input() answer:Observable<Answer>;

  constructor() { }

  ngOnInit() {
  }

}
