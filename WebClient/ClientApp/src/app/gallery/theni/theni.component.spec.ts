import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheniComponent } from './theni.component';

describe('TheniComponent', () => {
  let component: TheniComponent;
  let fixture: ComponentFixture<TheniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
