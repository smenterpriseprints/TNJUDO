import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanjavurComponent } from './thanjavur.component';

describe('ThanjavurComponent', () => {
  let component: ThanjavurComponent;
  let fixture: ComponentFixture<ThanjavurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanjavurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanjavurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
