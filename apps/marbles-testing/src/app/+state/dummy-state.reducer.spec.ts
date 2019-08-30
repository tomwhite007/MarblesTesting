import { DummyStateLoaded } from './dummy-state.actions';
import {
  DummyStateState,
  Entity,
  initialState,
  reducer
} from './dummy-state.reducer';

describe('DummyState Reducer', () => {
  const getDummyStateId = it => it['id'];
  let createDummyState;

  beforeEach(() => {
    createDummyState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid DummyState actions ', () => {
    it('should return set the list of known DummyState', () => {
      const dummyStates = [
        createDummyState('PRODUCT-AAA'),
        createDummyState('PRODUCT-zzz')
      ];
      const action = new DummyStateLoaded(dummyStates);
      const result: DummyStateState = reducer(initialState, action);
      const selId: string = getDummyStateId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
