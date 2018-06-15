//Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Services
import { AuthService } from './services/auth.service';
import { PopupService } from './services/popup/popup.service';
import { AuthGuard } from './services/auth.guard.service';

//Components
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//// Screens
    import { UserProfileScreenComponent } from './components/user-profile-screen/user-profile-screen.component';
    import { HomeScreenComponent } from './components/home-screen/home-screen.component';
    import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//// Authorisation
    import { RegisterComponent } from './components/register/register.component';
    import { LoginComponent } from './components/login/login.component';
//// Popups
    import { AuthPopupComponent } from './components/auth-popup/auth-popup.component'
//// List
    import { ListScreenComponent } from './components/list-components/list-screen/list-screen.component';
    import { ListComponent } from './components/list-components/list/list.component';
    import { ListElementComponent } from './components/list-components/list-element/list-element.component';
//// Question & Answer
    import { QuestionCreateScreenComponent } from './components/question-create-screen/question-create-screen.component';
    import { QuestionCardComponent } from './components/question-components/question-card/question-card.component';
    import { QuestionAnswerUserComponent } from './components/question-components/question-answer-user/question-answer-user.component';
    import { QuestionAnswerPointsComponent } from './components/question-components/question-answer-points/question-answer-points.component';
    import { AnswerCardComponent } from './components/answer-components/answer-card/answer-card.component';
    import { AnswerListComponent } from './components/answer-components/answer-list/answer-list.component'; 
    import { QuestionAnswerContentComponent } from './components/question-components/question-answer-content/question-answer-content.component';
    import { AnswerFormComponent } from './components/answer-components/answer-form/answer-form.component';
//// Map 
    import { MapComponent } from './components/map-components/map/map.component';   
    import { MapScreenComponent } from './components/map-components/map-screen/map-screen.component';
//// Other
    import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component'; 
    import { ScreenToolbarComponent } from './components/screen-toolbar/screen-toolbar.component';


//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';



export const appRoutes: Routes = [
  { path: 'ask', component: QuestionCreateScreenComponent,
    data:  { icon: 'add_circle_outline' },
    canActivate: [AuthGuard]
  }, //ASK
  { path: 'search', component: HomeScreenComponent,
    data:  { icon: 'search' }
  }, //SEARCH
  { path: 'map', component: MapScreenComponent,
    data:  { icon: 'map' }
  }, // MAPA
  { path: 'list', component: ListScreenComponent,
    data:  { icon: 'list' }
  }, // LISTA 
  { path: 'register', component: AuthPopupComponent,
    data:  { icon: 'lock' }
  }, // Testowy na razie aby otwierać popupa - trzeba sprawzdić czy user jest zalogowany i wyswietlac popup w odpowiednim momencie
  { path: 'profile', component: UserProfileScreenComponent,
    data:  { icon: 'account_circle' },
    canActivate: [AuthGuard]
  },
  { path: 'question/:questionid', component: QuestionCardComponent ,
    data:  { icon: '' }
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full',
    data:  { icon: '' } // temporary , nie wiem jak rozwiazać aby nie wywalało mi błędu przy undefind 
  },
  { path: '**', component: PageNotFoundComponent, 
    data:  { icon: '' } // temporary , nie wiem jak rozwiazać aby nie wywalało mi błędu przy undefind 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserProfileScreenComponent,
    HomeScreenComponent,
    RegisterComponent,
    LoginComponent,
    NavigationTabComponent,
    AuthPopupComponent,
    ListScreenComponent,
    ListComponent,
    QuestionCreateScreenComponent,
    ListElementComponent,
    QuestionCardComponent,
    QuestionAnswerPointsComponent,
    QuestionAnswerUserComponent,
    AnswerCardComponent,
    AnswerListComponent,
    QuestionAnswerContentComponent,
    AnswerFormComponent,
    MapComponent,
    MapScreenComponent,
    ScreenToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [ 
    AuthService, 
    AuthGuard,
    PopupService,
    { provide: 'appRoutes', useValue: appRoutes } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
