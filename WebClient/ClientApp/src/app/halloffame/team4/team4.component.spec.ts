import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Team4Component } from './team4.component';

describe('Team4Component', () => {
  let component: Team4Component;
  let fixture: ComponentFixture<Team4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
