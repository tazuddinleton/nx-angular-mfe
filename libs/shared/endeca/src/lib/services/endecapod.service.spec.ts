import { TestBed } from '@angular/core/testing';

import { EndecapodService } from './endecapod.service';

describe('EndecapodService', () => {
  let service: EndecapodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndecapodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
