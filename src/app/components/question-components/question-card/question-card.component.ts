import { Component, OnInit } from '@angular/core';
import { Question } from '../../../model/data.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  question:Question;
  questionKey:String;

  constructor( private route: ActivatedRoute ) 
  {
    this.route.params.subscribe( params => this.showQuestion( params['questionid']) );
    console.log( " nie mam danych - pobieram z route/:id "); 
    
  }

  ngOnInit() {
  }

  showQuestion( questionId:String )
  {
    // this.question = getQuestion( questionId );
    // Dorobić funkcje która pobiera pytanie z pomocą wysłanego id -> getQuestion( selectedId );
    // To chyba powinno być w serwisie
    // check if exist - wpisanie w pasek adres /question/wymysloneCos - zwraca error
    this.questionKey = questionId;
  }

}
