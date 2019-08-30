import { TestBed } from '@angular/core/testing';

import { FakeRestService } from './fake-rest.service';

describe('FakeRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeRestService = TestBed.get(FakeRestService);
    expect(service).toBeTruthy();
  });
});
