import { TestBed } from '@angular/core/testing';

import { ServeiNomsService } from './servei-noms.service';

describe('ServeiNomsService', () => {
  let service: ServeiNomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiNomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
