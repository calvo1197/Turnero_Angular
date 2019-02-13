import { TestBed } from '@angular/core/testing';

import { KioskoService } from './kiosko.service';

describe('KioskoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KioskoService = TestBed.get(KioskoService);
    expect(service).toBeTruthy();
  });
});
