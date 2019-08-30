import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/angular';

import { DummyStateEffects } from './dummy-state.effects';
import { LoadDummyState, DummyStateLoaded } from './dummy-state.actions';
import { TestScheduler } from 'rxjs/testing';

describe('DummyStateEffects', () => {
  let actions$: Observable<Action>;
  let effects: DummyStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [DummyStateEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(DummyStateEffects);
  });

  describe('loadDummyState$', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      // asserting the two objects are equal
      // required for all Marbles assertions to be asserted by Jest or Jasmine
      expect(actual).toEqual(expected);
    });

    it('should trigger loaded action', () => {
      testScheduler.run(({ cold, hot, expectObservable, flush }) => {
        actions$ = hot('-a-|', { a: new LoadDummyState() });

        expectObservable(effects.loadDummyState$).toBe('-a-|', {
          a: new DummyStateLoaded(['test1', 'test2', 'test3'])
        });
      });
    });
  });
});
