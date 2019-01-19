import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiContactComponent } from './chennai-contact.component';

describe('ChennaiContactComponent', () => {
  let component: ChennaiContactComponent;
  let fixture: ComponentFixture<ChennaiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennaiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
