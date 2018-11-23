import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAffiliationComponent } from './payment-affiliation.component';

describe('PaymentAffiliationComponent', () => {
  let component: PaymentAffiliationComponent;
  let fixture: ComponentFixture<PaymentAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
