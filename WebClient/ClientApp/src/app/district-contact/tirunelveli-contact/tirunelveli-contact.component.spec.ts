import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirunelveliContactComponent } from './tirunelveli-contact.component';

describe('TirunelveliContactComponent', () => {
  let component: TirunelveliContactComponent;
  let fixture: ComponentFixture<TirunelveliContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirunelveliContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirunelveliContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
