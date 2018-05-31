import { Component } from '@angular/core';
import { PopupService } from './services/popup/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hint It!';

  constructor(private popup:PopupService){}

  openPopUp( _action:String )
  {
    this.popup.openPopup(_action);
  }
}
