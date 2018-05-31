import { Injectable, Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthPopupComponent } from '../../components/auth-popup/auth-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(public dialog: MatDialog) { }

  openPopup( tab:String ): void 
  {
    let selectedTabIndex:Number = 0;
    let popupContent:String = '';
    let popupComponent;

    if( tab == 'login')
    {
      popupContent = 'loginRegister';
      selectedTabIndex = 0;
    }
    else if ( tab == 'register' )
    {
      popupContent = 'loginRegister';
      selectedTabIndex = 1;
    }

    if( popupContent == 'loginRegister')
    {
      popupComponent = AuthPopupComponent;
    }

    let dialogRef = this.dialog.open(popupComponent, {
      width: '500px',
      data: { selectedTabIndex: selectedTabIndex }
    });
  }
}
