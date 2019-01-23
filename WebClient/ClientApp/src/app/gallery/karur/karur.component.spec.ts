import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarurComponent } from './karur.component';

describe('KarurComponent', () => {
  let component: KarurComponent;
  let fixture: ComponentFixture<KarurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
