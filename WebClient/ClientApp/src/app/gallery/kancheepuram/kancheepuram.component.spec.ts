import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KancheepuramComponent } from './kancheepuram.component';

describe('KancheepuramComponent', () => {
  let component: KancheepuramComponent;
  let fixture: ComponentFixture<KancheepuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KancheepuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KancheepuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
