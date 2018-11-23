import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubContactComponent } from './club-contact.component';

describe('ClubContactComponent', () => {
  let component: ClubContactComponent;
  let fixture: ComponentFixture<ClubContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
