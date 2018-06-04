import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseDatabase } from 'angularfire2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../model/data.interfaces';
import { ThenableReference } from '@firebase/database-types';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private questionsRef: AngularFireList<Question>;
  public questions: Observable<Question[]>;
  
  constructor(db: AngularFireDatabase) {
    
    // Question list
    this.questionsRef = db.list('questions');
    this.questions = this.questionsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  createQuestion(title: string, content: string): ThenableReference{
    return this.questionsRef.push({
      title: title,
      content: content,
      lat: 0,
      lng: 0,
      timestamp: Date.now()
    });
  }

}
