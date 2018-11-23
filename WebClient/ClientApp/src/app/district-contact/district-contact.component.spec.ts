import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictContactComponent } from './district-contact.component';

describe('DistrictContactComponent', () => {
  let component: DistrictContactComponent;
  let fixture: ComponentFixture<DistrictContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
