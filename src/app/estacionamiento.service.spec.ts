import { TestBed, inject } from '@angular/core/testing';

import { EstacionamientoService } from './estacionamiento.service';

describe('EstacionamientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacionamientoService]
    });
  });

  it('should be created', inject([EstacionamientoService], (service: EstacionamientoService) => {
    expect(service).toBeTruthy();
  }));
});
