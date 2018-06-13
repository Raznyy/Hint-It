import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-toolbar',
  templateUrl: './screen-toolbar.component.html',
  styleUrls: ['./screen-toolbar.component.css']
})
export class ScreenToolbarComponent implements OnInit 
{

  @Input() screenName: string;

  constructor() { }

  ngOnInit() {
  }

}
