import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamanathapuramGalleryComponent } from './ramanathapuram-gallery.component';

describe('RamanathapuramGalleryComponent', () => {
  let component: RamanathapuramGalleryComponent;
  let fixture: ComponentFixture<RamanathapuramGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamanathapuramGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamanathapuramGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
