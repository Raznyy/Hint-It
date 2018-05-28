import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileScreenComponent } from './components/user-profile-screen/user-profile-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


export const appRoutes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    MatToolbarModule,
    MatButtonModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
