import { Component, OnInit } from '@angular/core';
import { QuestionDraft } from '../../model/interfaces';
import { DatabaseService } from '../../services/database.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-question-create-screen',
  templateUrl: './question-create-screen.component.html',
  styleUrls: ['./question-create-screen.component.css']
})
export class QuestionCreateScreenComponent implements OnInit {

  private questionModel: QuestionDraft;
  public db: DatabaseService;

  constructor(db: DatabaseService, public authService:AuthService) {
    this.db = db;
    this.questionModel = {
      title: "",
      content: ""
    };
  }

  ngOnInit() {
  }

  createQuestionDraft(): QuestionDraft{
    return {
      title: "",
      content: ""
    };
  }

  onSubmit(form: NgForm) { 
    console.log(this.questionModel);
    this.createQuestionFromDraft(this.questionModel);
    // Reset model
    this.questionModel = this.createQuestionDraft();
    form.reset();
  }

  createQuestionFromDraft(draft: QuestionDraft){
    this.db.createQuestion(draft.title, draft.content, this.authService.getUserUID(), this.authService.getUserName());
  }

}
