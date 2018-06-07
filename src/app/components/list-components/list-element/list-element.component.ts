import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../../model/data.interfaces';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() question:Observable<Question>;

  constructor() { }

  ngOnInit() {
  }

}
