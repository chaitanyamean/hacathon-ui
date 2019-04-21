import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateScoreBarComponent } from './candidate-score-bar.component';

describe('CandidateScoreBarComponent', () => {
  let component: CandidateScoreBarComponent;
  let fixture: ComponentFixture<CandidateScoreBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateScoreBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateScoreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
