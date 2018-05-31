import { Component, OnInit, Inject } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  selectedTabIndex:Number;

  ngOnInit() 
  {
    this.selectedTabIndex = this.data.selectedTabIndex;
  }
}