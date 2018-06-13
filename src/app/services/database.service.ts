import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseDatabase } from 'angularfire2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question, Answer, User } from '../model/data.interfaces';
import { ThenableReference } from '@firebase/database-types';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: AngularFireDatabase;
  private questionsRef: AngularFireList<Question>;
  private answersRef: AngularFireList<Answer>;
  private usersRef: AngularFireList<User>;
  // public questions: Observable<Question[]>;
  
  constructor(firebaseDatabase: AngularFireDatabase) {
    this.db = firebaseDatabase;
    // Question list
    this.questionsRef = this.db.list('questions');
    this.answersRef = this.db.list('answers');
    this.usersRef = this.db.list('users');
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
      timestamp: Date.now(),
      voteCount: 0,
      votes: {},
      score: 0
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

  createAnswer(questionKey: string, content: string, userId: string): PromiseLike<void>{
    const ref = this.db.list('answers/'+questionKey).push({
      content: content,
      voteCount: 0,
      votes: {},
      score: 0,
      author: userId,
      timestamp: Date.now()
    });
    const key = ref.key;
    return ref.then(() => {
      const itemRef: AngularFireObject<any> = this.db.object('questions/'+questionKey+'/answers');
      let answerRefObject = {};
      answerRefObject[key] = true;
      itemRef.update(answerRefObject);
    })
    // this.db.database.ref('a').transaction((transaction)=>{
    //   transaction.
    // });
  }

  getQuestionAnswers(questionKey: string): Observable<Answer[]>{
    let dbRef: AngularFireList<Answer> = this.db.list('answers/'+questionKey, ref => ref.orderByChild("score") );
    return dbRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      map(array => array.reverse())
    );
  }

  voteForQuestion(questionKey: string, voterId: string, voteType: "down"|"up"): PromiseLike<void>{
    const itemRef = this.db.database.ref('questions/'+questionKey);
    return itemRef.transaction(function(question) {
      if (question) {
        // Create list of voters if does not exist
        if (!question.votes) {
          question.votes = {};
        }
        // if voting up
        if(voteType === "up"){
          if (question.votes[voterId] === 1) {
            // remove up vote
            question.votes[voterId] = null;
            question.score--;
            question.voteCount--;
          } else if (question.votes[voterId] === -1) {
            // change vote
            question.votes[voterId] = 1;
            question.score += 2;
          } else {
            // vote up
            question.votes[voterId] = 1;
            question.score++;
            question.voteCount++;
          }
        // if voting down
        }else{
          if (question.votes[voterId] === -1) {
            // remove down vote
            question.votes[voterId] = null;
            question.score++;
            question.voteCount--;
          } else if (question.votes[voterId] === 1) {
            // change vote
            question.votes[voterId] = -1;
            question.score -= 2;
          } else {
            // vote down
            question.votes[voterId] = -1;
            question.score--;
            question.voteCount++;
          }
        }
      }
      return question;
    });
  }

  voteForAnswer(questionKey: string, answerKey: string, voterId: string, voteType: "down"|"up"): PromiseLike<void>{
    const itemRef = this.db.database.ref('answers/'+questionKey+'/'+answerKey);
    let data = {
      answerAuthor: null,
      scoreChange: 0
    };
    return itemRef.once('value').then(function(snapshot) {
      data.answerAuthor = (snapshot.val() && snapshot.val().author);
    }).then(()=>{
      itemRef.transaction((answer) => {
        if (answer) {
          // Create list of voters if does not exist
          if (!answer.votes) {
            answer.votes = {};
          }
          // if voting up
          if(voteType === "up"){
            if (answer.votes[voterId] === 1) {
              // remove up vote
              answer.votes[voterId] = null;
              answer.score--;
              answer.voteCount--;
              data.scoreChange--;
            } else if (answer.votes[voterId] === -1) {
              // change vote
              answer.votes[voterId] = 1;
              answer.score += 2;
              data.scoreChange += 2;
            } else {
              // vote up
              answer.votes[voterId] = 1;
              answer.score++;
              answer.voteCount++;
              data.scoreChange++;
            }
          // if voting down
          }else{
            if (answer.votes[voterId] === -1) {
              // remove down vote
              answer.votes[voterId] = null;
              answer.score++;
              answer.voteCount--;
              data.scoreChange++;
            } else if (answer.votes[voterId] === 1) {
              // change vote
              answer.votes[voterId] = -1;
              answer.score -= 2;
              data.scoreChange -= 2;
            } else {
              // vote down
              answer.votes[voterId] = -1;
              answer.score--;
              answer.voteCount++;
              data.scoreChange--;
            }
          }
        }
        return answer;
      }).then( () =>{
        let authorRef = this.db.database.ref('/users/'+data.answerAuthor);
        authorRef.transaction(function(user) {
          if(user){
            user.score += data.scoreChange;
          }
          return user;
        });
      });
    });
  }

  createUser(userId: string, username: string, email: string, avatar: string): Promise<void>{
    return this.usersRef.set(userId, {
      username: username,
      email: email,
      avatar: avatar,
      answers: {},
      created: Date.now(),
      score: 0
    });
  }

  getUser(userId: string): Observable<User>{
    let dbRef: AngularFireObject<User> = this.db.object('/users/'+userId);
    return dbRef.valueChanges();
  }

}
