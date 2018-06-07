import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {

  listTypes:String[];
  listType: String = 'test';
  constructor() 
  {
    this.listTypes = [ 'Featured' , 'Closest' , 'Newest' , 'Active' ];
  }

  ngOnInit() {
  }

}
