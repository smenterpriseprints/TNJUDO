import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamakkalComponent } from './namakkal.component';

describe('NamakkalComponent', () => {
  let component: NamakkalComponent;
  let fixture: ComponentFixture<NamakkalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamakkalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamakkalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
