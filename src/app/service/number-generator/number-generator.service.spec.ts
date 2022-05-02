import { TestBed } from '@angular/core/testing';

import { NumberGeneratorService } from './number-generator.service';

describe('NumberGeneratorService', () => {
  let service: NumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be random number greater then minimum parameter or equal', () => {
    expect(service.generateRandomNumber(5,10)).toBeGreaterThanOrEqual(5);
  });

  it('should be random number less then maximum parameter or equal', () => {
    expect(service.generateRandomNumber(5,10)).toBeLessThanOrEqual(10);
  });
});
