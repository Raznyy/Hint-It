import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseDatabase } from 'angularfire2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../model/data.interfaces';
import { ThenableReference } from '@firebase/database-types';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: AngularFireDatabase;
  private questionsRef: AngularFireList<Question>;
  // public questions: Observable<Question[]>;
  
  constructor(firebaseDatabase: AngularFireDatabase) {
    this.db = firebaseDatabase;
    // Question list
    this.questionsRef = this.db.list('questions');
    // this.questions = this.questionsRef.snapshotChanges().pipe(
    //   map(changes => 
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // );
  }

  createQuestion(title: string, content: string, userId: string): ThenableReference{
    return this.questionsRef.push({
      title: title,
      content: content,
      lat: 0,
      lng: 0,
      answers: [],
      author: userId,
      timestamp: Date.now()
    });
  }

  getQuestions(limit: number = 25, orderBy: string = "timestamp", order: "ASC"|"DESC" = "DESC"): Observable<Question[]>{
    let dbRef: AngularFireList<Question> = this.db.list('/questions', (ref) => {
      // Create query
      let query = ref.orderByChild(orderBy);
      if(order === "DESC"){
        query = query.limitToLast(limit);
      }else{
        query = query.limitToFirst(limit);
      }
      return query;
    });
    return dbRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      map((array) => (order === "DESC") ? array.reverse() : array ) // Reverse if order is DESC
    );
  }

  getLatestQuestions(limit: number = 25){
    this.getQuestions(limit, "timestamp", "DESC");
  }

  getUserQuestions(userId: string, limit: number = 25){
    let dbRef: AngularFireList<Question> = this.db.list('/questions', ref => ref.orderByChild("author").equalTo(userId).limitToFirst(limit) );
    return dbRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getQuestion(key: string){
    let dbRef: AngularFireObject<Question> = this.db.object('/questions/'+key);
    return dbRef.valueChanges();
    // return dbRef.snapshotChanges().pipe(
    //   map(c => ({ key: c.payload.key, ...c.payload.val() })
    //   )
    // );
  }

}
