import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateContactComponent } from './state-contact.component';

describe('StateContactComponent', () => {
  let component: StateContactComponent;
  let fixture: ComponentFixture<StateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
