import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocformComponent } from './nocform.component';

describe('NocformComponent', () => {
  let component: NocformComponent;
  let fixture: ComponentFixture<NocformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
