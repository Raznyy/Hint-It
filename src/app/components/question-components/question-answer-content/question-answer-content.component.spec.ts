import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerContentComponent } from './question-answer-content.component';

describe('QuestionAnswerContentComponent', () => {
  let component: QuestionAnswerContentComponent;
  let fixture: ComponentFixture<QuestionAnswerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
