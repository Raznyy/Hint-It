import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import { map, take, tap } from 'rxjs/operators';



@Injectable()
  export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                public afAuth: AngularFireAuth,
                public snackBar: MatSnackBar) { }
  
                canActivate(
                  next: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean>  {
                  return this.afAuth.authState.pipe(
                    take(1),
                    map((authState) => !!authState),
                    tap(authenticated => {
                      if (!authenticated) this.router.navigate(['/login']).then(() => {
                            this.snackBar.open("Zaloguj się aby zobaczyć swój profil.", "Ok", {
                              duration: 5000, 
                            });
                          });
                    })
                  )
                }
  }