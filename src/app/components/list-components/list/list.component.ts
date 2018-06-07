import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../../model/data.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listType: String; // Trzeba będzie przefiltorwać wyniki zależnie od typu pytania. 

  @Input() questions:Observable<Question[]>;
  question:Observable<Question>;

  constructor() { }

  ngOnInit() 
  {
    
  }

}
