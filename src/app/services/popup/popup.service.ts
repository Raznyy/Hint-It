import { Injectable, Component } from '@angular/core';
import { LoginPopupComponent } from '../../components/login-popup/login-popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(public dialog: MatDialog) { }

  action:String;

  openPopup( _action:String ): void 
  {
    let selectedTabIndex:Number = 0;
    let popupContent:String = '';
    let popupComponent;

    if( _action == 'login')
    {
      popupContent = 'loginRegister';
      selectedTabIndex = 0;
    }
    else if ( _action == 'register' )
    {
      popupContent = 'loginRegister';
      selectedTabIndex = 1;
    }

    if( popupContent == 'loginRegister')
    {
      popupComponent = LoginPopupComponent;
    }

    let dialogRef = this.dialog.open(popupComponent, {
      width: '500px',
      data: { selectedTabIndex: selectedTabIndex }
    });
  }
}
