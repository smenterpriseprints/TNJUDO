import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamanathapuramContactComponent } from './ramanathapuram-contact.component';

describe('RamanathapuramContactComponent', () => {
  let component: RamanathapuramContactComponent;
  let fixture: ComponentFixture<RamanathapuramContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamanathapuramContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamanathapuramContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
