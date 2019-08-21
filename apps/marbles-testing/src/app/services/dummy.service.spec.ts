import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { DummyService } from './dummy.service';

describe('DummyService', () => {
  let service: DummyService;

  const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal
    // required for all Marbles assertions to be asserted by Jest or Jasmine
    expect(actual).toEqual(expected);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(DummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should derive new observable values', () => {
    testScheduler.run(({ cold, expectObservable, flush }) => {
      service.resetCounter();
      service.dummyObs$ = cold('--a--b|', { a: 'xaaa', b: 'ybbbb' });
      service.setDerived();

      expectObservable(service.derivedObs$).toBe('--a--b|', {
        a: 'x',
        b: 'y'
      });

      flush();

      expect(service.getCounter()).toBe(2);
    });
  });
});
