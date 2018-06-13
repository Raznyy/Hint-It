import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../../model/data.interfaces';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {

  listTypes:String[];
  listType: String;
  questions:Observable<Question[]>;
  
  constructor( databaseService:DatabaseService ) 
  {
    this.listTypes = [ 'Featured' , 'Closest' , 'Newest' , 'Active' ];
    this.questions = databaseService.getQuestions()
  }

  ngOnInit() {
  }

}
