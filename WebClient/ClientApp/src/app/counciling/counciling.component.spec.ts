import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilingComponent } from './counciling.component';

describe('CouncilingComponent', () => {
  let component: CouncilingComponent;
  let fixture: ComponentFixture<CouncilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
