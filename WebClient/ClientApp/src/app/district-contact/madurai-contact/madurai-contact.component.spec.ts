import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaduraiContactComponent } from './madurai-contact.component';

describe('MaduraiContactComponent', () => {
  let component: MaduraiContactComponent;
  let fixture: ComponentFixture<MaduraiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaduraiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaduraiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
