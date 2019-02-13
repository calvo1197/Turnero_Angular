import { TestBed } from '@angular/core/testing';

import { AsesorService } from './asesor..service';

describe('Asesor.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsesorService = TestBed.get(AsesorService);
    expect(service).toBeTruthy();
  });
}); 
