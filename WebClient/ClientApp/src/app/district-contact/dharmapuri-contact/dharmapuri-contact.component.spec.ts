import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DharmapuriContactComponent } from './dharmapuri-contact.component';

describe('DharmapuriContactComponent', () => {
  let component: DharmapuriContactComponent;
  let fixture: ComponentFixture<DharmapuriContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DharmapuriContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DharmapuriContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
