import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenToolbarComponent } from './screen-toolbar.component';

describe('ScreenToolbarComponent', () => {
  let component: ScreenToolbarComponent;
  let fixture: ComponentFixture<ScreenToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
