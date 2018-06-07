import { Component, OnInit } from '@angular/core';
import { Question } from '../../../model/data.interfaces';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  question: Observable<Question>;
  questionKey: string;

  constructor( private route: ActivatedRoute, private db: DatabaseService ) 
  {
    this.route.params.subscribe( (params) => {
      // Get question by key
      this.questionKey = params['questionid'];
      this.question = db.getQuestion( this.questionKey )
    });
  }

  ngOnInit() {
  }

}
