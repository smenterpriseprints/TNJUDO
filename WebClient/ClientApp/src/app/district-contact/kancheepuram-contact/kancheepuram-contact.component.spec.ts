import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KancheepuramContactComponent } from './kancheepuram-contact.component';

describe('KancheepuramContactComponent', () => {
  let component: KancheepuramContactComponent;
  let fixture: ComponentFixture<KancheepuramContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KancheepuramContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KancheepuramContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
