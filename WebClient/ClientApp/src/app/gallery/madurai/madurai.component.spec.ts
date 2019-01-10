import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaduraiComponent } from './madurai.component';

describe('MaduraiComponent', () => {
  let component: MaduraiComponent;
  let fixture: ComponentFixture<MaduraiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaduraiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaduraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
