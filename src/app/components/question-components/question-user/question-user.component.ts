import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '@firebase/util';
import { Question } from '../../../model/data.interfaces';

@Component({
  selector: 'app-question-user',
  templateUrl: './question-user.component.html',
  styleUrls: ['./question-user.component.css']
})
export class QuestionUserComponent implements OnInit {

  @Input() question:Observable<Question>;

  constructor() { }

  ngOnInit() {
  }

}
