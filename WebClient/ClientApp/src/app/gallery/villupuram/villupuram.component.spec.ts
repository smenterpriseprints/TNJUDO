import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillupuramComponent } from './villupuram.component';

describe('VillupuramComponent', () => {
  let component: VillupuramComponent;
  let fixture: ComponentFixture<VillupuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillupuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillupuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
