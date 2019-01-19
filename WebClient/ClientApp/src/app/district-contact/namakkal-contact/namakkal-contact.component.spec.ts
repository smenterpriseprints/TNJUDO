import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamakkalContactComponent } from './namakkal-contact.component';

describe('NamakkalContactComponent', () => {
  let component: NamakkalContactComponent;
  let fixture: ComponentFixture<NamakkalContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamakkalContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamakkalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
