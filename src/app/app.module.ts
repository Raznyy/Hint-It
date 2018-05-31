//Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services
import { AuthService } from './services/auth.service';
import { PopupService } from './services/popup/popup.service';

//Components
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileScreenComponent } from './components/user-profile-screen/user-profile-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthPopupComponent } from './components/auth-popup/auth-popup.component';
import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component';

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




export const appRoutes: Routes = [
  { path: 'ask', component: HomeScreenComponent,
    data:  { icon: 'add_circle_outline' }
  }, //ASK
  { path: 'search', component: HomeScreenComponent,
    data:  { icon: 'search' }
  }, //SEARCH
  { path: 'map', component: HomeScreenComponent,
    data:  { icon: 'map' }
  }, // MAPA
  { path: 'list', component: HomeScreenComponent,
    data:  { icon: 'list' }
  }, // LISTA 
  { path: 'register', component: AuthPopupComponent,
    data:  { icon: 'account_circle' }
  }, // Testowy na razie aby otwierać popupa - trzeba sprawzdić czy user jest zalogowany i wyswietlac popup w odpowiednim momencie
  { path: 'profile', component: UserProfileScreenComponent,
    data:  { icon: 'account_circle' }
  },
  { path: '',
    redirectTo: '/',
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
    AuthPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
    MatIconModule
  ],
  providers: [ 
    PopupService,
    { provide: 'appRoutes', useValue: appRoutes } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
