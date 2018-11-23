import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalNewsComponent } from './national-news.component';

describe('NationalNewsComponent', () => {
  let component: NationalNewsComponent;
  let fixture: ComponentFixture<NationalNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
