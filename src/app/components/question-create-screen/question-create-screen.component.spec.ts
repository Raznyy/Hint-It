import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreateScreenComponent } from './question-create-screen.component';

describe('QuestionCreateScreenComponent', () => {
  let component: QuestionCreateScreenComponent;
  let fixture: ComponentFixture<QuestionCreateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCreateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCreateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
