import { Component, OnInit, Inject } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css']
})
export class AuthPopupComponent implements OnInit {

  constructor
  ( 
    public dialogRef: MatDialogRef<AuthPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { } // INTERFACE

  ngOnInit()
  {
  }

  public closeDialog()
  {
    this.dialogRef.close();
  }
}
