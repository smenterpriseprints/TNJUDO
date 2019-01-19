import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrichyContactComponent } from './trichy-contact.component';

describe('TrichyContactComponent', () => {
  let component: TrichyContactComponent;
  let fixture: ComponentFixture<TrichyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrichyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrichyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
