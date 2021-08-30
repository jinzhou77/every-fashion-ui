import { TestBed } from '@angular/core/testing';

import { SneakerTradesService } from './sneaker-trades.service';

describe('SneakerTradesService', () => {
  let service: SneakerTradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerTradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
