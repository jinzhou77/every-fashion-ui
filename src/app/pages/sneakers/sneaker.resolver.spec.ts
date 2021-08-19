import { TestBed } from '@angular/core/testing';

import { SneakerResolver } from './sneaker.resolver';

describe('SneakerResolver', () => {
  let resolver: SneakerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SneakerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
