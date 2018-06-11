import { Component, OnInit, Injector } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { PopupService } from '../../services/popup/popup.service';

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.css']
})
export class NavigationTabComponent implements OnInit {

  appRoutes:any[];
  appRoutesVisible:Routes[];
  activeLinkIndex = -1;

  constructor(private injector: Injector, private router: Router, private popup: PopupService) 
  {
    this.appRoutes = this.injector.get('appRoutes');
    this.appRoutesVisible = [];
    this.appRoutes.forEach( ( route, i ) => 
    {
      if(route.data.icon != '' )
        this.appRoutesVisible.push(route)
    });
    console.log(this.appRoutesVisible);
  }

  ngOnInit() {
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
  }
  
}
