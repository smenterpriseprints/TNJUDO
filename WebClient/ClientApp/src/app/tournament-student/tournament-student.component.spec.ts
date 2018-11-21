import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentStudentComponent } from './tournament-student.component';

describe('TournamentStudentComponent', () => {
  let component: TournamentStudentComponent;
  let fixture: ComponentFixture<TournamentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
