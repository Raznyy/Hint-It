import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerPointsComponent } from './question-answer-points.component';

describe('QuestionAnswerPointsComponent', () => {
  let component: QuestionAnswerPointsComponent;
  let fixture: ComponentFixture<QuestionAnswerPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswerPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
