import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintWinnersComponent } from './print-winners.component';

describe('PrintWinnersComponent', () => {
  let component: PrintWinnersComponent;
  let fixture: ComponentFixture<PrintWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
