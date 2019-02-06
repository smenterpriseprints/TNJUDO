import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiruppurComponent } from './tiruppur.component';

describe('TiruppurComponent', () => {
  let component: TiruppurComponent;
  let fixture: ComponentFixture<TiruppurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiruppurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiruppurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
