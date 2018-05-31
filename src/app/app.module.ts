import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileScreenComponent } from './components/user-profile-screen/user-profile-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupService } from './services/popup/popup.service';

export const appRoutes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'login', 
    component: LoginPopupComponent,
    data: { action: 'login' } //Jak przesyłać datę przez router?
  },
  { path: 'register',
    component: LoginPopupComponent,
    data: { action: 'register' } 
  },
  { path: 'profile', component: UserProfileScreenComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserProfileScreenComponent,
    HomeScreenComponent,
    RegisterComponent,
    LoginComponent,
    LoginPopupComponent
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
    MatDialogModule
  ],
  providers: [ PopupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
