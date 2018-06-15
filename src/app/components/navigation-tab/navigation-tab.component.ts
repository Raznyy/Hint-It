import { Component, OnInit, Injector } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { PopupService } from '../../services/popup/popup.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.css']
})
export class NavigationTabComponent implements OnInit {

  appRoutes:any[];
  appRoutesVisible:Routes[];
  activeLinkIndex = -1;
  isLogged: boolean;

  constructor(private injector: Injector, private router: Router, private popup: PopupService, private authService: AuthService) {}

  ngOnInit() 
  {
    this.refreshAppRoutes();
  }

  navigate( path:String )
  {
    // Trzeba sprawdzić czy user jest zalogowany
    if( path == 'login' || path == 'register' )
    {
      this.popup.openPopup( "auth" , path);
    }
    else
    {
      this.router.navigate([path]);
    }
    this.refreshAppRoutes();
  }

  public refreshAppRoutes()
  {
    this.isLogged = this.authService.isLoggedIn();
    this.appRoutes = this.injector.get('appRoutes');
    this.appRoutesVisible = [];
    this.appRoutes.forEach( ( route, i ) => 
    {
      if(route.data.icon != '' )
      {
        if( this.isLogged && route.path == 'register')
        {
          return;
        }
        else if ( !this.isLogged && route.path == 'profile' )
        {
          this.appRoutesVisible.push(route)
        }
        else 
        {
          this.appRoutesVisible.push(route)
        }
      }
    });
    
  }

  public toggleLoged()
  {
    console.log("JEstem tutaj?");
  }
  
}
