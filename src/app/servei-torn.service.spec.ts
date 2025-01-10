import { TestBed } from '@angular/core/testing';

import { ServeiTornService } from './servei-torn.service';

describe('ServeiTornService', () => {
  let service: ServeiTornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiTornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
