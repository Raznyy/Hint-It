import { Injectable, Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthPopupComponent } from '../../components/auth-popup/auth-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService implements PopupInterface {

  constructor(public dialog: MatDialog) { }

  type: String;
  tab: String;

  openPopup( type:String, tab:String ): void 
  {
    this.type = type;
    this.tab = tab;
    let selectedTabIndex:Number = 0;
    let popupComponent;

    // popup type
    if( type == 'auth')
    {
      popupComponent = AuthPopupComponent;
    }

    // tab selection
    if( tab == 'login')
    {
      selectedTabIndex = 0;
    }
    else if ( tab == 'register' )
    {
      selectedTabIndex = 1;
    }

    // opening popup
    let dialogRef = this.dialog.open(popupComponent, {
      width: '500px',
      data: { selectedTabIndex: selectedTabIndex }
    });
  }
  
}
