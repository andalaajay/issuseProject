import { TestBed } from '@angular/core/testing';

import { IssuseServiceService } from './issuse-service.service';

describe('IssuseServiceService', () => {
  let service: IssuseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
