import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '@firebase/util';
import { Question } from '../../../model/data.interfaces';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {

  @Input() question:Observable<Question>;

  constructor() { }

  ngOnInit() 
  {

  }

}
