import { Component, OnInit, Inject } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css']
})
export class AuthPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { } // INTERFACE

  ngOnInit() {
  }

}
