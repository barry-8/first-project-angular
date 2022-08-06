import { TestBed } from '@angular/core/testing';

import { PreviousbookingServiceService } from './previousbooking-service.service';

describe('PreviousbookingServiceService', () => {
  let service: PreviousbookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousbookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
