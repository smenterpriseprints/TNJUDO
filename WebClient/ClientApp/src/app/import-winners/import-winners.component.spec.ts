import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportWinnersComponent } from './import-winners.component';

describe('ImportWinnersComponent', () => {
  let component: ImportWinnersComponent;
  let fixture: ComponentFixture<ImportWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
