import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseDatabase } from 'angularfire2';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: FirebaseDatabase;
  
  constructor(fireStore: AngularFireDatabase) {
    this.database = fireStore.database;
  }

  addQuestion(name: string){
    return this.database.ref('questions/').push({
      username: "alo nazwa",
      email: "@3",
      profile_picture : "sdasdasd"
    });
  }

  getQuestions(){
    // return this.database.ref('questions/').on('value', function(){}).then(function(snapshot) {
    //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   console.log(snapshot);
    // });
  }

}
