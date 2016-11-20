/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetsService } from './planets.service';

describe('Service: Planets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsService]
    });
  });

  it('should ...', inject([PlanetsService], (service: PlanetsService) => {
    expect(service).toBeTruthy();
  }));
});
