import { TestBed } from '@angular/core/testing';

import { LeasePaymentService } from './lease-payment.service';

describe('LeasePaymentService', () => {
  let service: LeasePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeasePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
