import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintParticipantsComponent } from './print-participants.component';

describe('PrintParticipantsComponent', () => {
  let component: PrintParticipantsComponent;
  let fixture: ComponentFixture<PrintParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
