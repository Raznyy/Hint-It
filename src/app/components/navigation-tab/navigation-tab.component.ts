import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '../../services/popup/popup.service';

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.css']
})
export class NavigationTabComponent implements OnInit {

  appRoutes:any[];
  activeLinkIndex = -1;

  constructor(private injector: Injector, private router: Router, private popup: PopupService) 
  {
    this.appRoutes = this.injector.get('appRoutes');
    console.log(this.appRoutes);
  }

  ngOnInit() {
  }

  navigate( path:String )
  {
    // Trzeba sprawdzić czy user jest zalogowany
    if( path == 'login' || path == 'register' )
    {
      this.openPopUp( path ); 
    }
    else
    {
      this.router.navigate([path]);
    }
  }

  openPopUp( tab:String )
  {
    this.popup.openPopup(tab);
  }
}
