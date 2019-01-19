import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheniContactComponent } from './theni-contact.component';

describe('TheniContactComponent', () => {
  let component: TheniContactComponent;
  let fixture: ComponentFixture<TheniContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheniContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheniContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
